# 《JERRY 算法小抄（Java）》

> 原创内容，转载请注明出处！

# 一、数据结构基础

## 1.1 线性结构

### （1）顺序存储结构（数组）

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
        MyArray myArray = new MyArray(10);
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

### （2）链式存储结构（链表）

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
            //（由于节点的 next 默认为 null，所以不用特定赋值为 null）
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

    private int size;

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
        Node temp = head;
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

### （3）栈

##### 【数组实现】

##### 【链表实现】

### （4）队列

##### 【数组实现】

##### 【链表实现】

### （5）散列表

##### 【开放寻址】

##### 【链表法】

##### 【红黑树法】
