# 《JERRY 数据结构与算法小抄（Java）》

> 原创内容，转载请注明出处！

> 对《漫画算法》《漫画算法2》的算法实现及改进。

# 一、数据结构基础

## 1.1 线性结构

### 1.1.1 顺序存储结构（数组）

```java
package list.array;

public class MyArray {
    private int[] array;
    private int size;   // 数组的当前元素个数

    // capacity：数组容量
    public MyArray(int capacity) {
        // 创建指定容量的数组空间
        this.array = new int[capacity];
        // 数组空间创建时元素个数为 0
        this.size = 0;
    }

    // 数组扩容（默认扩容 2 倍）
    private void resize() {
        int[] arrayNew = new int[this.array.length * 2];
        // System.arrayCopy(arr1, x, arr2, y, l);
        // 将 arr1 里从索引为 x 的元素开始, 复制到 arr2 里的索引为 y 的位置, 复制的元素个数为 l 个
        System.arraycopy(this.array, 0, arrayNew, 0, this.array.length);
        this.array = arrayNew;
    }

    //（增）：数组元素的插入
    // index：插入的位置
    // element：插入的元素
    public void insert(int index, int element) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index > this.size) {
            throw new IndexOutOfBoundsException("超出数组实际元素范围！");
        }

        // 如果 size 超过数组的最大容量，则进行数组扩容
        if (this.size >= this.array.length) {
            resize();
        }

        // 若通过上述步骤，那么开始进行元素的插入
        // 从右向左循环，将 index 位置及之后的元素逐个向右挪 1 位
        //（若在 size 的末尾插入，则不满足循环条件，自动跳过循环）
        for (int i = this.size - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i];
        }

        // 腾出的 index 位置放入新元素
        this.array[index] = element;
        this.size++;
    }

    //（删）：数组元素的删除
    // index：删除的位置
    public int delete(int index) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出数组实际元素范围！");
        }

        // 若通过上述步骤，那么声明一个变量，用于临时保存删除的元素
        int deletedElement = this.array[index];

        // 从左向右循环，将 index 之后的元素逐个向左挪 1 位
        for (int i = index; i < this.size - 1; i++) {
            this.array[i] = this.array[i + 1];
        }

        this.size--;
        return deletedElement;
    }

    //（改）：数组元素的更新
    // index：更新的位置
    // element：更新的元素
    public int update(int index, int element) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出数组实际元素范围！");
        }

        // 临时保存被更新的元素
        int updatedElement = this.array[index];

        // 更新元素
        this.array[index] = element;

        return updatedElement;
    }

    //（查）：数组元素的查找
    // index：查找的位置
    public int get(int index) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出数组实际元素范围！");
        }

        return this.array[index];
    }

    // 输出数组
    public void output() {
        for (int i = 0; i < this.size; i++) {
            System.out.print(this.array[i] + " ");
        }
        System.out.println();
    }
}
```

```java
package list.array;

// 测试代码
public class MyArrayTest {
    public static void main(String[] args) throws Exception {
        MyArray myArray = new MyArray(3);
        myArray.insert(0, 3);
        myArray.insert(1, 7);
        myArray.insert(2, 9);
        myArray.insert(3, 5);
        myArray.insert(4, 6);
        myArray.output();
        System.out.println(myArray.delete(2));
        myArray.output();
        System.out.println(myArray.update(1, 1));
        myArray.output();
        System.out.println(myArray.get(3));
    }
}

/*
3 7 9 5 6
9
3 7 5 6
7
3 1 5 6
6
 */
```

### 1.1.2 链式存储结构（链表）

##### 【单向链表】

```java
package list.linkedlist;

public class MyLinkedList {
    // 定义节点内部类
    private static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    // 头节点指针
    private Node head;

    // 尾节点指针（方便尾部插入方便）
    private Node last;

    // 链表的实际长度（当前节点数）
    private int size;

    public int getHead() {
        return this.head.data;
    }

    public int getLast() {
        return this.last.data;
    }

    public int getSize() {
        return this.size;
    }

    // 链表实际长度（当前元素个数）
    //（增）：元素的插入
    // index：插入的位置（假设起始位置和数组统一为 0 开始）
    // data：插入的元素
    public void insert(int index, int data) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index > this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么实例化一个 Node 对象
        Node insertedNode = new Node(data);

        if (this.size == 0) {
            // 空链表
            // 头、尾指针都指向唯一一个节点
            this.head = insertedNode;
            this.last = insertedNode;
            //（由于新节点的 next 默认为 null，所以不用特定赋值为 null）
        } else if (index == 0) {
            // 插入头部
            // 1、让新节点的 next 指向原来的头节点
            insertedNode.next = this.head;
            // 2、将新节点设置为头节点
            this.head = insertedNode;
        } else if (index == this.size) {
            // 插入尾部
            // 1、让原来的尾节点的 next 指向新节点
            this.last.next = insertedNode;
            // 2、将新节点设置为尾节点
            this.last = insertedNode;
            //（由于新节点的 next 默认为 null，所以不用特定赋值为 null）
        } else {
            // 插入中间
            // 1、设置 prevNode 指针指向插入位置的前驱节点
            Node prevNode = get(index - 1);
            // 2、将新节点的 next 指向前驱节点 next 指向的节点
            insertedNode.next = prevNode.next;
            // 3、将前驱节点的 next 指向新节点
            prevNode.next = insertedNode;
        }
        this.size++;
    }

    //（删）：元素的删除
    // index：删除的位置
    public int remove(int index) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么声明一个删除节点指针，用于临时指向被删除节点
        Node removedNode;

        if (index == 0) {
            // 删除头节点
            // 1、将删除节点指针指向头节点
            removedNode = this.head;
            // 2、将第二个节点设置为头节点
            this.head = this.head.next;
            //（将被删除节点的 next 设置为 null，方便垃圾回收机制回收）
            removedNode.next = null;
        } else if (index == this.size - 1) {
            // 删除尾节点
            // 1、设置 prevNode 指针指向删除位置的前驱节点
            Node prevNode = get(index - 1);
            // 2、将删除节点指针指向被删除节点
            removedNode = prevNode.next;
            // 3、将前驱节点的 next 设置为 null
            prevNode.next = null;
            // 4、将前驱节点设置为尾节点
            this.last = prevNode;
            //（将被删除节点的 next 设置为 null，方便垃圾回收机制回收）
            removedNode.next = null;
        } else {
            // 删除中间节点
            // 1、设置 prevNode 指针指向删除位置的前驱节点
            Node prevNode = get(index - 1);
            // 2、设置 nextNode 指针指向删除位置的后一个节点
            Node nextNode = prevNode.next.next;
            // 3、将删除节点指针指向被删除节点
            removedNode = prevNode.next;
            // 4、将被删除节点的前驱节点的 next 指向被删除节点的后一个节点
            prevNode.next = nextNode;
            //（将被删除节点的 next 设置为 null，方便垃圾回收机制回收）
            removedNode.next = null;
        }
        this.size--;
        return removedNode.data;
    }

    //（查）：元素的查找
    // index：查找的位置
    public Node get(int index) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么声明一个查找节点指针，首先指向头节点
        Node getNode = this.head;

        // 单线传递，逐节查找
        for (int i = 0; i < index; i++) {
            getNode = getNode.next;
        }

        return getNode;
    }

    //（查）：元素值的查找
    public int getValue(int index) throws Exception {
        return get(index).data;
    }

    //（改）：元素的修改
    // index：修改的位置
    // data：修改的元素
    public void update(int index, int data) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么声明一个更新节点指针，指向更新节点
        Node updateNode = get(index);

        updateNode.data = data;
    }

    // 输出链表
    public void output() {
        Node temp = this.head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }
}
```

```java
package list.linkedlist;

// 测试代码
public class MyLinkedListTest {
    public static void main(String[] args) throws Exception {
        MyLinkedList myLinkedList = new MyLinkedList();
        myLinkedList.insert(0, 3);
        myLinkedList.insert(1, 7);
        myLinkedList.insert(2, 9);
        myLinkedList.insert(3, 5);
        myLinkedList.insert(4, 6);
        myLinkedList.output();
        System.out.println(myLinkedList.remove(0));
        myLinkedList.output();
        System.out.println(myLinkedList.getValue(2));
        myLinkedList.update(3, 1);
        myLinkedList.output();
    }
}

/*
3 7 9 5 6
3
7 9 5 6
5
7 9 5 1
 */
```

##### 【双向链表】

```java
package list.linkedlist;

public class MyDoubleLinkedList {
    // 定义节点内部类
    private static class Node {
        int data;
        Node prev;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    // 头节点指针
    private Node head;

    // 尾节点指针（方便尾部插入方便）
    private Node last;

    // 链表的实际长度（当前节点数）
    private int size;

    public int getHead() {
        return this.head.data;
    }

    public int getLast() {
        return this.last.data;
    }

    public int getSize() {
        return this.size;
    }

    // 链表实际长度（当前元素个数）
    //（增）：元素的插入
    // index：插入的位置（假设起始位置和数组统一为 0 开始）
    // data：插入的元素
    public void insert(int index, int data) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index > this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么实例化一个 Node 对象
        Node insertedNode = new Node(data);

        if (this.size == 0) {
            // 空链表
            // 头、尾指针都指向唯一一个节点
            this.head = insertedNode;
            this.last = insertedNode;
            //（由于新节点的 next prev 默认为 null，所以不用特定赋值为 null）
        } else if (index == 0) {
            // 插入头部
            // 1、让新节点的 next 指向原来的头节点
            insertedNode.next = this.head;
            // 2、让原来头节点的 prev 指向新节点
            this.head.prev = insertedNode;
            // 3、将新节点设置为头节点
            this.head = insertedNode;
            //（由于新节点的 prev 默认为 null，所以不用特定赋值为 null）
        } else if (index == this.size) {
            // 插入尾部
            // 1、让原来的尾节点的 next 指向新节点
            this.last.next = insertedNode;
            // 2、让新节点的 prev 指向原来的尾节点
            insertedNode.prev = this.last;
            // 3、将新节点设置为尾节点
            this.last = insertedNode;
            //（由于新节点的 next 默认为 null，所以不用特定赋值为 null）
        } else {
            // 插入中间
            // 1、声明 tempNode 指针指向插入位置的当前节点
            Node tempNode = get(index);
            // 2、将当前节点的前驱节点的 next 指向新节点
            tempNode.prev.next = insertedNode;
            // 3、将新节点的 prev 指向当前节点的前驱节点
            insertedNode.prev = tempNode.prev;
            // 4、将新节点的 next 指向当前节点
            insertedNode.next = tempNode;
            // 5、将当前节点的 prev 指向新节点
            tempNode.prev = insertedNode;
        }

        this.size++;
    }

    //（删）：元素的删除
    // index：删除的位置
    public int remove(int index) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么声明一个删除节点指针，用于临时指向被删除节点
        Node removedNode;

        if (index == 0) {
            // 删除头节点
            // 1、将删除节点指针指向头节点
            removedNode = this.head;
            // 2、将第二个节点设置为头节点
            this.head = this.head.next;
            // 3、将新的头节点的 prev 设为 null
            this.head.prev = null;
            //（将被删除节点的 next prev 设置为 null，方便垃圾回收机制回收）
            removedNode.next = null;
            removedNode.prev = null;
        } else if (index == this.size - 1) {
            // 删除尾节点
            // 1、将删除节点指针指向被删除节点
            removedNode = this.last;
            // 2、将被删除节点的前驱节点的 next 设置为 null
            this.last.prev.next = null;
            // 3、将前驱节点设置为尾节点
            this.last = this.last.prev;
            //（将被删除节点的 next prev 设置为 null，方便垃圾回收机制回收）
            removedNode.next = null;
            removedNode.prev = null;
        } else {
            // 删除中间节点
            // 1、声明 tempNode 指针指向被删除节点
            Node tempNode = get(index);
            // 2、将删除节点指针指向被删除节点
            removedNode = tempNode;
            // 3、将被删除节点的前驱节点的 next 指向被删除节点的后一个节点
            tempNode.prev.next = tempNode.next;
            // 4、将被删除节点的后一个节点的 prev 指向被删除节点的前一个节点
            tempNode.next.prev = tempNode.prev;
            //（将被删除节点的 next prev 设置为 null，方便垃圾回收机制回收）
            removedNode.next = null;
            removedNode.prev = null;
        }

        this.size--;
        return removedNode.data;
    }

    //（查）：元素的查找
    // index：查找的位置
    public Node get(int index) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么声明一个查找节点指针
        Node getNode;

        // 那么判断 index 在 size 中是靠前还是靠后
        if (index < this.size / 2) {
            // 如果靠前，则从头向后查找
            // 将查找节点指针指向头节点
            getNode = this.head;
            // 单线传递，逐节查找
            for (int i = 0; i < index; i++) {
                getNode = getNode.next;
            }
        } else {
            // 如果靠后，则从尾向前查找
            // 将查找节点指针指向尾节点
            getNode = this.last;
            // 单线传递，逐节查找
            for (int i = 0; i < this.size - index - 1; i++) {
                getNode = getNode.prev;
            }
        }

        return getNode;
    }

    //（查）：元素值的查找
    public int getValue(int index) throws Exception {
        return get(index).data;
    }

    //（改）：元素的修改
    // index：修改的位置
    // data：修改的元素
    public void update(int index, int data) throws Exception {
        // 判断 index 是否超过 size 范围
        if (index < 0 || index >= this.size) {
            throw new IndexOutOfBoundsException("超出链表节点范围！");
        }

        // 若通过上述步骤，那么声明一个更新节点指针，指向更新节点
        Node updateNode = get(index);

        updateNode.data = data;
    }

    // 输出链表
    public void output() {
        Node temp = this.head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }
}
```

```java
package list.linkedlist;

// 测试代码
public class MyDoubleLinkedListTest {
    public static void main(String[] args) throws Exception {
        MyDoubleLinkedList myDoubleLinkedList = new MyDoubleLinkedList();
        myDoubleLinkedList.insert(0, 3);
        myDoubleLinkedList.insert(1, 7);
        myDoubleLinkedList.insert(2, 9);
        myDoubleLinkedList.insert(3, 5);
        myDoubleLinkedList.insert(4, 6);
        myDoubleLinkedList.output();
        System.out.println(myDoubleLinkedList.remove(0));
        myDoubleLinkedList.output();
        System.out.println(myDoubleLinkedList.getValue(2));
        myDoubleLinkedList.update(3, 1);
        myDoubleLinkedList.output();
    }
}

/*
3 7 9 5 6
3
7 9 5 6
5
7 9 5 1
 */
```

## 1.2 栈

##### 【数组实现】

```java
package stack.arraystack;

public class MyArrayStack {
    private int[] arrayStack;
    private int top = -1;   // 栈顶指针
    private int bottom = 0; // 栈底指针
    private int size;       // 栈的当前长度（元素个数）

    public MyArrayStack(int capacity) {
        // 创建指定容量的数组空间
        this.arrayStack = new int[capacity];
        // 数组空间创建时当前元素个数为 0
        this.size = this.top - this.bottom + 1;
    }

    // 数组扩容（默认扩容 2 倍）
    private void resize() {
        int[] arrayNew = new int[this.arrayStack.length * 2];
        // System.arrayCopy(arr1, x, arr2, y, l);
        // 将 arr1 里从索引为 x 的元素开始, 复制到 arr2 里的索引为 y 的位置, 复制的元素个数为 l 个
        System.arraycopy(this.arrayStack, 0, arrayNew, 0, this.arrayStack.length);
        this.arrayStack = arrayNew;
    }

    // 入栈
    // data：入栈元素
    public void push(int data) {
        // 如果数组容量不够，那么进行扩容
        if (this.size >= this.arrayStack.length) {
            resize();
        }
        // 将栈顶上移一位
        this.top++;
        // 压栈
        this.arrayStack[this.top] = data;
        // 更新栈长
        this.size = this.top - this.bottom + 1;
    }

    // 出栈
    // num：出栈元素个数
    public int pop() {
        // 如果栈为空那么抛出异常
        if (this.size == 0) {
            throw new IndexOutOfBoundsException("当前栈为空！");
        }
        // 出栈
        // 将栈顶下移动一位
        this.top--;
        // 更新栈长
        this.size = this.top - this.bottom + 1;
        return this.arrayStack[this.top + 1];
    }

    // 得到栈顶元素
    public int getTop() throws Exception {
        if (this.size == 0) {
            throw new IndexOutOfBoundsException("当前栈为空！");
        }
        return this.arrayStack[this.top];
    }

    // 得到栈底元素
    public int getBottom() throws Exception {
        if (this.size == 0) {
            throw new IndexOutOfBoundsException("当前栈为空！");
        }
        return this.arrayStack[this.bottom];
    }

    // 得到栈长
    public int getSize() {
        return this.size;
    }

    // 输出栈
    public void output() {
        if (this.size == 0) {
            System.out.println("当前栈为空！");
        } else {
            for (int i = this.size - 1; i >= 0; i--) {
                System.out.print(this.arrayStack[i] + " ");
            }
            System.out.println();
        }
    }
}
```

```java
package stack.arraystack;

// 测试代码
public class MyArrayStackTest {
    public static void main(String[] args) throws Exception {
        MyArrayStack myArrayStack = new MyArrayStack(3);
        myArrayStack.output();
        myArrayStack.push(5);
        myArrayStack.push(1);
        myArrayStack.push(9);
        myArrayStack.push(6);
        myArrayStack.output();
        System.out.println(myArrayStack.getSize());
        System.out.println(myArrayStack.getTop());
        System.out.println(myArrayStack.getBottom());
        System.out.println(myArrayStack.pop());
        myArrayStack.output();
        myArrayStack.pop();
        myArrayStack.output();
        myArrayStack.pop();
        myArrayStack.output();
        myArrayStack.pop();
        myArrayStack.output();
    }
}

/*
当前栈为空！
6 9 1 5
4
6
5
6
9 1 5
1 5
5
当前栈为空！
 */
```

##### 【链表实现】

```java
package stack.linkedstack;

import list.linkedlist.MyLinkedList;

public class MyLinkedStack {
    MyLinkedList myLinkedList = new MyLinkedList();

    // 入栈
    public void push(int data) throws Exception {
        this.myLinkedList.insert(this.myLinkedList.getSize(), data);
    }

    // 出栈
    public int pop() throws Exception {
        return this.myLinkedList.remove(this.myLinkedList.getSize() - 1);
    }

    // 得到栈顶元素
    public int getTop() throws Exception {
        return this.myLinkedList.getValue(this.myLinkedList.getSize() - 1);
    }

    // 得到栈底元素
    public int getBottom() throws Exception {
        return this.myLinkedList.getValue(0);
    }

    // 得到栈长
    public int getSize() {
        return this.myLinkedList.getSize();
    }

    // 输出栈
    public void output() {
        if (this.myLinkedList.getSize() == 0) {
            System.out.println("当前栈为空！");
        } else {
            this.myLinkedList.output();
        }
    }
}
```

```java
package stack.linkedstack;

// 测试代码
public class MyLinkedStackTest {
    public static void main(String[] args) throws Exception {
        MyLinkedStack myLinkedStack = new MyLinkedStack();
        myLinkedStack.output();
        myLinkedStack.push(5);
        myLinkedStack.push(1);
        myLinkedStack.push(9);
        myLinkedStack.push(6);
        myLinkedStack.output();
        System.out.println(myLinkedStack.getSize());
        System.out.println(myLinkedStack.getTop());
        System.out.println(myLinkedStack.getBottom());
        System.out.println(myLinkedStack.pop());
        myLinkedStack.output();
        myLinkedStack.pop();
        myLinkedStack.output();
        myLinkedStack.pop();
        myLinkedStack.output();
        myLinkedStack.pop();
        myLinkedStack.output();
    }
}

/*
当前栈为空！
5 1 9 6
4
6
5
6
5 1 9
5 1
5
当前栈为空！
 */
```

## 1.3 队列

##### 【数组实现】

```java
package queue.arrayqueue;

public class MyArrayQueue {
    // 数组构建循环队列
    private int[] array;
    // 队头指针
    private int front;
    // 队尾指针
    private int rear;

    // 获取队头元素
    public int getFront() throws Exception {
        // 队列为空：对头指针和队尾指针在同一位置
        if (this.front == this.rear) {
            throw new Exception("当前队列为空！");
        }
        return this.array[this.front];
    }

    // 获取队尾元素
    public int getRear() throws Exception {
        // 队列为空：对头指针和队尾指针在同一位置
        if (this.front == this.rear) {
            throw new Exception("当前队列为空！");
        }
        return this.array[this.rear - 1];
    }

    // 获取队列长度
    public int getSize() {
        // 队列长度：(队尾指针 - 队头指针 + 数组长度) % 数组长度
        return (this.rear - this.front + this.array.length) % this.array.length;
    }

    // capacity：容量
    public MyArrayQueue(int capacity) {
        this.array = new int[capacity];
    }

    // 入队
    // element：入队元素
    public void enQueue(int element) throws Exception {
        // 队列已满：(队尾下标 + 1) % 数组长度 = 队头下标
        // 注意：队尾指针指向的位置永远空出 1 位，所以队列最大容量比数组小 1
        if ((this.rear + 1) % this.array.length == this.front) {
            throw new Exception("当前队列已满！");
        }
        // 入队尾
        this.array[this.rear] = element;
        // 更新队尾指针
        this.rear = (this.rear + 1) % this.array.length;
    }

    // 出队
    public int deQueue() throws Exception {
        // 队列为空：对头指针和队尾指针在同一位置
        if (this.front == this.rear) {
            throw new Exception("当前队列为空！");
        }
        // 取出队头元素
        int deQueueElement = this.array[this.front];
        // 更新队头指针
        this.front = (this.front + 1) % this.array.length;
        return deQueueElement;
    }

    // 输出队列
    public void output() {
        if (getSize() == 0) {
            System.out.println("当前队列为空！");
        } else {
            for (int i = this.front; i != this.rear; i = (i + 1) % this.array.length) {
                System.out.print(this.array[i] + " ");
            }
            System.out.println();
        }
    }
}
```

```java
package queue.arrayqueue;

// 测试代码
public class MyArrayQueueTest {
    public static void main(String[] args) throws Exception {
        MyArrayQueue myArrayQueue = new MyArrayQueue(6);
        myArrayQueue.output();
        myArrayQueue.enQueue(3);
        myArrayQueue.enQueue(5);
        myArrayQueue.enQueue(6);
        myArrayQueue.enQueue(8);
        myArrayQueue.enQueue(1);
        myArrayQueue.output();
        System.out.println(myArrayQueue.getSize());
        System.out.println(myArrayQueue.deQueue());
        System.out.println(myArrayQueue.deQueue());
        System.out.println(myArrayQueue.deQueue());
        System.out.println(myArrayQueue.getSize());
        myArrayQueue.enQueue(6);
        myArrayQueue.enQueue(8);
        myArrayQueue.enQueue(1);
        myArrayQueue.output();
        System.out.println(myArrayQueue.getFront());
        System.out.println(myArrayQueue.getRear());
    }
}

/*
当前队列为空！
3 5 6 8 1
5
3
5
6
2
8 1 6 8 1
8
1
 */
```

##### 【链表实现】

```java
package queue.linkedqueue;

import list.linkedlist.MyLinkedList;

public class MyLinkedQueue {
    // 实例化一个单链表
    private MyLinkedList myLinkedList = new MyLinkedList();

    // 获取队头元素
    public int getFront() throws Exception {
        if (this.myLinkedList.getSize() == 0) {
            throw new Exception("当前队列为空！");
        }
        return this.myLinkedList.getValue(0);
    }

    // 获取队尾元素
    public int getRear() throws Exception {
        if (this.myLinkedList.getSize() == 0) {
            throw new Exception("当前队列为空！");
        }
        return this.myLinkedList.getValue(this.myLinkedList.getSize() - 1);
    }

    // 获取队长度
    public int getSize() {
        return this.myLinkedList.getSize();
    }

    // 入队
    // element：元素
    public void enQueue(int element) throws Exception {
        this.myLinkedList.insert(this.myLinkedList.getSize(), element);
    }

    // 出队
    public int deQueue() throws Exception {
        if (this.myLinkedList.getSize() == 0) {
            throw new Exception("当前队列为空！");
        }
        return this.myLinkedList.remove(0);
    }

    // 输出队列
    public void output() {
        if (this.myLinkedList.getSize() == 0) {
            System.out.println("当前队列为空！");
        } else {
            this.myLinkedList.output();
        }
    }
}
```

```java
package queue.linkedqueue;

import queue.arrayqueue.MyArrayQueue;

// 测试代码
public class MyLinkedQueueTest {
    public static void main(String[] args) throws Exception {
        MyLinkedQueue myLinkedQueue = new MyLinkedQueue();
        myLinkedQueue.output();
        myLinkedQueue.enQueue(3);
        myLinkedQueue.enQueue(5);
        myLinkedQueue.enQueue(6);
        myLinkedQueue.enQueue(8);
        myLinkedQueue.enQueue(1);
        myLinkedQueue.output();
        System.out.println(myLinkedQueue.getSize());
        System.out.println(myLinkedQueue.deQueue());
        System.out.println(myLinkedQueue.deQueue());
        System.out.println(myLinkedQueue.deQueue());
        System.out.println(myLinkedQueue.getSize());
        myLinkedQueue.enQueue(6);
        myLinkedQueue.enQueue(8);
        myLinkedQueue.enQueue(1);
        myLinkedQueue.output();
        System.out.println(myLinkedQueue.getFront());
        System.out.println(myLinkedQueue.getRear());
    }
}

/*
当前队列为空！
3 5 6 8 1
5
3
5
6
2
8 1 6 8 1
8
1
 */
```

## 1.4 散列表

##### 【开放寻址】

```java
package hashtable.openaddressing;

public class HashTableOpenAddressing {
    // 声明字符串型二维数组
    // 每列的第一行用于保存：Key
    // 每列的第二行用于保存：Value
    private String[][] array;
    // 数组的当前元素个数
    private int size;   

    // capacity：数组容量
    public HashTableOpenAddressing(int capacity) {
        // 创建指定容量的二维数组空间
        // 为尽量延迟扩容，这里暂定数组容量为元素容量的 3 倍
        capacity = capacity * 3;
        this.array = new String[capacity][2];
        // 数组空间创建时元素个数为 0
        this.size = 0;
    }

    // 数组扩容（默认扩容 2 倍）
    private void resize() {
        // 创建一个新数组，长度为原数组的两倍
        String[][] arrayNew = new String[this.array.length * 2][2];
        // 重新 Hash
        for (int i = 0; i < this.array.length; i++) {
            if (this.array[i][0] != null) {
                putter(arrayNew, this.array[i][0], this.array[i][1]);
            }
        }
        // 更新原数组
        this.array = arrayNew;
    }

    // 写操作
    private void putter(String[][] arr, String key, String value) {
        // 利用哈希函数计算插入点，范围 [0, arr.length-1]
        int hash = Math.abs(key.hashCode() % arr.length);
        // 如果插入点处函数不为空，那么利用 ”开放寻址法“，寻找插入点
        if (arr[hash][0] != null) {
            do {
                // 先后寻一位
                hash++;
                // 判断是否超过数组边界
                // 如果超过数组边界，那么跳转到数组头部继续寻找
                if (hash == arr.length) {
                    hash = 0;
                }
            } while (arr[hash][0] != null);
        }
        // 直到插入点不为空，那么进行插入
        arr[hash][0] = key;
        arr[hash][1] = value;
    }

    // 写操作（封装）
    public void put(String key, String value) {
        // 衡量散列表的饱和度是否需要扩容
        // LoadFactor：负载因子，默认为 0.75F
        final float LoadFactor = 0.75F;
        if (this.size >= this.array.length * LoadFactor) {
            resize();
        }
        // 写操作
        putter(this.array, key, value);
        this.size++;
    }

    // 读操作
    public String get(String key) {
        // 利用哈希函数计算读出点，范围 [0, arr.length-1]
        int hash = Math.abs(key.hashCode() % this.array.length);
        // 判断读出点的 key 与查询点的 key 是否相同
        // 如果不相同，那么利用 ”开放寻址法“，寻找下一个读出点
        if (!this.array[hash][0].equals(key)) {
            do {
                // 先后寻一位
                hash++;
                // 判断是否超过数组边界
                // 如果超过数组边界，那么跳转到数组头部继续寻找
                if (hash == this.array.length) {
                    hash = 0;
                }
            } while (!this.array[hash][0].equals(key));
        }
        // 直到读出点的 key 满足要求，那么返回 value
        return this.array[hash][1];
    }
}
```

```java
package hashtable.openaddressing;

// 测试代码
public class HashTableOpenAddressingTest {
    public static void main(String[] args) {
        HashTableOpenAddressing hashTableOpenAddressing = new HashTableOpenAddressing(2);
        hashTableOpenAddressing.put("20190521340", "周吉瑞");
        hashTableOpenAddressing.put("20190521326", "方彦权");
        hashTableOpenAddressing.put("20190521301", "吴慧林");
        hashTableOpenAddressing.put("20180521201", "傅瑜凡");
        hashTableOpenAddressing.put("20190521121", "楼金曼");
        hashTableOpenAddressing.put("20190521304", "高淑杰");
        hashTableOpenAddressing.put("20190521343", "卢赵俊");
        hashTableOpenAddressing.put("20190521105", "曲洪震");
        hashTableOpenAddressing.put("20190521335", "谢应鹏");
        hashTableOpenAddressing.put("20190521146", "谭皓文");
        System.out.println(hashTableOpenAddressing.get("20190521340"));
        System.out.println(hashTableOpenAddressing.get("20190521301"));
        System.out.println(hashTableOpenAddressing.get("20180521201"));
        System.out.println(hashTableOpenAddressing.get("20190521121"));
        System.out.println(hashTableOpenAddressing.get("20190521304"));
    }
}

/*
周吉瑞
吴慧林
傅瑜凡
楼金曼
高淑杰
 */
```

##### 【链表法】

##### 【红黑树法】
