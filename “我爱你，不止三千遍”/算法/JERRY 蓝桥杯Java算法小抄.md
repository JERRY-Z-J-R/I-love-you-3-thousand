# 【JERRY 蓝桥杯Java算法小抄】

> 原创内容，转载请注明出处！

> 内容基于 JDK 1.8 版本。

> 仔细读题！仔细读题！仔细读题！（尤其是做完题目后，要再次仔细读题防止遗漏条件！）

> 复杂的问题首先设计数据结构再设计算法！

> 再次强调要好好读题，连测试用例也不要放过，因为测试用例的边界可能存在特殊的数字要排除！

# 【求整数位数】

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
        // 以临时变量 temp 来代替 num，以免损坏原数值
        int temp = num;
		int count = 0;
        // 不断除 10 直到小于 1
		while (temp >= 1) {
			temp /= 10;
			count++;
		}
		System.out.print(count);
	}
}
```

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
        // 将数字转为字符串
		String s = n + ""; // 法一
        // String s = String.valueOf(n); 法二
		System.out.println(s.length());
	}

}
```

# 【整数逐位切数】

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
        int temp = num;
		while (temp >= 1) {
			// 输出顺序：低位——>高位
            //（对于正序输出可以利用：定长数组（先取得位数）、ArrayList、栈……）
            // 与 10 求余，得到末位数
			System.out.print(temp % 10 + " ");
            // 不断除 10 直到小于 1
			temp /= 10;
		}
	}
}
```

# 【整数逐位切数统计】

题目：统计 1 ~ 2020 中数字 2 出现的次数。

```java
public class Main {

	public static void main(String[] args) {
		int count = 0;
		for (int i = 1; i <= 2020; i++) {
			int temp = i;
			while (temp >= 1) {
				if (temp % 10 == 2) {
					count++;
				}
				temp /= 10;
			}
		}
		System.out.print(count);
	}
}
```

```java
public class Main {
	
	public static void main(String[] args) {
		int count = 0;
		for (int i = 1; i <= 2020; i++) {
			// 将数字转化为字符串
			String s = i + "";
			for (int j = 0; j < s.length(); j++) {
				// charAt() 返回字符串返回指定索引处的 char 值（注意是char）
				if (s.charAt(j) == '2') {
					count++;
				}
			}
		}
		System.out.print(count);
	}
}
```

题目：统计 1 ~  2020 中包含数字 2 的数字个数。

```java
public class Main {

	public static void main(String[] args) {
		int count = 0;
		for (int i = 1; i <= 2020; i++) {
			int temp = i;
			while (temp >= 1) {
				if (temp % 10 == 2) {
					count++;
                    // 一但发现含有 2 便结束循环，无论后面还有没有 2
					break;
				} else {
					temp /= 10;
				}
			}
		}
		System.out.print(count);
	}
}
```

```java
public class Main {

	public static void main(String[] args) {
		int count = 0;
		for (int i = 1; i <= 2020; i++) {
            // 将数字转换为字符串，并利用 indexof 判断是否含某字符（不含有便返回 -1）
			if ((i + "").indexOf("2") != -1) {
				count++;
			}
		}
		System.out.print(count);
	}
}
```

# 【取余问题】

%：求余运算在编程中到底有什么实际意义？

- 一个数 % 更大的数 = 该数本身
- 一个数 % 10 = 该数的末位值
- 一个数 % 100 = 该数的倒数两位值
- 一个数 % 1000 = 该数的倒数三位值
- ……
- 一个数 % 第二个数 = 0（两个数可以除尽，可以用于求约数、因数）

![](https://img-blog.csdnimg.cn/20210414224910849.png)

```java
public class Main {
	public static void main(String[] args) {
		int a = 1;
		int b = 1;
		int c = 1;
		int d = 0;
		
		for (int i = 4; i <= 20190324; i++) {
			d = (a + b + c) % 10000;
			a = b;
			b = c;
			c = d;
		}
		
        /*
		int[] n = new int[4];
		
		for (int i = 3; i >= 0; i--) {
			n[i] = d % 10;
			d /= 10;
		}
		
		for (int x: n) {
			System.out.print(x);
		}
		*/
       
        System.out.println(d);
	}
}

// 4659
```

此题如果不对数据取余从而只关注后四位（进位对后四位的加减运算没有影响），那么数据将会是个天文数字，远远超过一切整型数据类型的范围！

# 【数组排序】

题目：

【输入格式】

- 第一行输入一个 n
- 接下来的 n 行，每行包含一个 0 ~ 100 的整数

【输出格式】

一共输出两行

- 第一行输出 n 个整数由大到小的排序，整数之间用空格隔开
- 第二行输出 n 个整数的平均值（四舍五入，保留两位小数）

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
       	// 在取得数组长度后再创建数组（原始方法）
		int[] aa = new int[n];
		for (int i = 0; i < n; i++) {
			aa[i] = sc.nextInt();
		}

        // 对数字排序
		int temp = 0;
		for (int i = 0; i < n - 1; i++) {
			for (int j = i + 1; j < n; j++) {
				if (aa[i] < aa[j]) {
					temp = aa[j];
					aa[j] = aa[i];
					aa[i] = temp;
				}
			}
		}
		
        // 输出排序后的数组
		for (int i = 0; i < aa.length; i++) {
			System.out.print(aa[i] + " ");
		}
		System.out.println();
		
		double sum = 0;
		
        // 对数组元素累加
		for (int i = 0; i < n; i++) {
			sum += aa[i];
		}

		System.out.printf("%.2f", sum = sum / n);
	}

}
```

```java
import java.util.*;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
       	// 在取得数组长度后再创建数组（原始方法）
		int[] aa = new int[n];
		for (int i = 0; i < n; i++) {
			aa[i] = sc.nextInt();
		}

        // 对数组排序（升序）
        // aa.sort(); 此种方式会报错！
		Arrays.sort(aa);
		
		// 对数组逆序
		for (int i = 0; i < aa.length / 2; i++) {
			int temp = aa[i];
			aa[i] = aa[aa.length - i - 1];
			aa[aa.length - i - 1] = temp;
		}
		
        // 输出排序后的数组（降序）
		for (int i = 0; i < aa.length; i++) {
			System.out.print(aa[i] + " ");
		}
		System.out.println();
		
		double sum = 0;
		
        // 对数组元素累加
		for (int i = 0; i < n; i++) {
			sum += aa[i];
		}

		System.out.printf("%.2f", sum = sum / n);
	}

}
```

```java
import java.util.*;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		double mid = 0.0;
		// 创建动态数组
		ArrayList<Integer> aa = new ArrayList<Integer>();
       	for (int i = 1; i <= n; i++) {
       		int num = sc.nextInt();
       		aa.add(num);
       		mid += num;
       	}
        // ArrayList LinkedList 不直接提供排序方法，须要借助Collections类
       	// Collections.sort(aa);				// 升序排序法1
        // 注意：Collections（类） Comparator（接口）
       	// aa.sort(Comparator.naturalOrder());	// 升序排序法2
       	aa.sort(Comparator.reverseOrder());		// 降序排序法
       	for (Integer t: aa) {
       		System.out.print(t + " ");
       	}
       	
       	System.out.println();
       	System.out.printf("%.2f", (mid / n));
	}

}
```

```java
import java.util.ArrayList;

public class RunoobTest {
    public static void main(String[] args) {
        ArrayList<String> sites = new ArrayList<String>();
        sites.add("Google");
        sites.add("Runoob");
        sites.add("Taobao");
        sites.add("Weibo");
        for (int i = 0; i < sites.size(); i++) {
            System.out.println(sites.get(i));
        }
    }
}
```

# 【数组最大最小值】

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// 定义 max min
		int max = Integer.MIN_VALUE; // -2147483648
		int min = Integer.MAX_VALUE; // 2147483647
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		// 定义平均数变量
		double mid = 0.0;
		for (int i = 1; i <= n; i++) {
			int num = sc.nextInt();
			// 返回两个数中的较大值
			max = Math.max(num, max);
			// 返回两个数中的较小值
			min = Math.min(num, min);
			mid += num;
		}
		System.out.println(max);
		System.out.println(min);
		// 格式化输出
        // 注意：这里mid为double型，如果是int型会报错
        // 即便是 (double)(mid / n)也不行，这种方式虽然不会报错，但是(mid / n)已经是Int型了，转为double也已经损失精度了！
        // (double)mid / n)这样可以！
		System.out.printf("%.2f", (mid / n));
	}

}
```

```java
import java.util.*;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		double mid = 0.0;
		
		// 创建动态数组
		ArrayList<Integer> aa = new ArrayList<Integer>();
       	for (int i = 1; i <= n; i++) {
       		int num = sc.nextInt();
       		aa.add(num);
       		mid += num;
       	}
       	
       	// Collections.sort(aa);				// 升序排序法1
       	// aa.sort(Comparator.naturalOrder());	// 升序排序法2
       	aa.sort(Comparator.reverseOrder());		// 降序排序法
       	
        // get() 返回动态数组索引处的值
        // size() 返回动态数组
       	System.out.println(aa.get(0));
       	System.out.println(aa.get(aa.size() - 1));
       	System.out.printf("%.2f", (mid / n));
	}

}
```

# 【二维矩阵IO录入】

```java
import java.util.*;
import java.io.*;

// 注意：这种方法读入的矩阵一行内数字之间没有空格！

public class Main {

	public static void main(String[] args) throws IOException {
        // start
		BufferedReader bf = new BufferedReader(new InputStreamReader(new FileInputStream("D:\\2020.txt")));
		String s = "";
        // 此处的行数要与输入时的数据对应
		char[][] arr = new char[行数][];
		int n = 0;
		while ((s = bf.readLine()) != null) {
			arr[n++] = s.toCharArray();
		}
        // stop
		for (int i = 0; i < arr.length; i++) {
			for (int j = 0; j < arr[i].length; j++) {
				System.out.print(arr[i][j] + " ");
			}
			System.out.println();
		}
	}

}
```

# 【二维矩阵填数】

【蛇形填数】

```
1      2      6      7     15   ...

3      5      8      14    ...

4      9     13      ...

10     12    ...

11     ...

...
```

请输出 （20，20）的值。

```java
public class Main {

	static int[][] arr = new int[100][100];
	
	public static void main(String[] args) {
		int x = 1;	// 定义横坐标
		int y = 1;	// 定义纵坐标
		int n = 0;	// 当前所排到的数
		
		arr[x][y] = ++n;	// 初始化第一个数的位置
		
		// 当目标值已经被填充时退出循环
		while (arr[20][20] == 0) {
			arr[x][++y] = ++n;	// 右填一位，然后开始向左下递推
			
			// 左下递推的规律是：x+1，y-1；终止标志是 y 减少到 1
			while (y > 1) {
				arr[++x][--y] = ++n;
			}
			
			arr[++x][y] = ++n;	// 下移一位，然后开始向右上递推
            
			// 右上递推的规律是：x-1，y+1；终止标志是 x 减少到 1
			while (x > 1) {
				arr[--x][++y] = ++n;
			}
		}
		System.out.print(arr[20][20]);
	}

}
```

# 【方格计数】

![](https://img-blog.csdnimg.cn/20210416235654304.png)

```java
public class Main {
	public static void main(String[] args) {
		int d = 500000, sum = 0;
		// 以一个半圆为标准，遍历半圆所在的矩形矩阵
		for (int i = 1; i <= d; i++)
			for (int j = 1; j <= d; j++)
				// 利用距离公式的平方形式判断一个点是否处于半径内
				if (i * i + j * j <= d * d)
					sum++;
		System.out.println(sum * 4);
	}
}

```

# 【螺旋折线】

![](https://img-blog.csdnimg.cn/202104170014373.png)

```java
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		long a = sc.nextInt();
		long b = sc.nextInt();
		long x = 0L, y = 0L;
		long count = 0L;
		long l = 0L;	// 直线移动步长
		o: while (true) {
			if (x == a && y == b) {
				break o;
			}
			
			// 更新步长
			l++;
			
			// 左移
			for (int i = 1; i <= l; i++) {
				x--;
				count++;
				if (x == a && y == b) {
					break o;
				}
			}
			
			// 上移
			for (int i = 1; i <= l; i++) {
				y++;
				count++;
				if (x == a && y == b) {
					break o;
				}
			}
			
			// 更新步长
			l++;
			
			// 右移
			for (int i = 1; i <= l; i++) {
				x++;
				count++;
				if (x == a && y == b) {
					break o;
				}
			}
			
			// 下移
			for (int i = 1; i <= l; i++) {
				y--;
				count++;
				if (x == a && y == b) {
					break o;
				}
			}
		}
		System.out.println(count);
	}
}
```

以上方法模拟了路线的走势，但是由于数据非常大，此种方式肯定会超时，所以我们还可以利用数学归纳法解决。

```java
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		long X = in.nextLong();
		long Y = in.nextLong();

		// 判断所在点所在的正方形
		long n = Math.max(Math.abs(X), Math.abs(Y));

		// 1. 之前正方形的长度和
		long Sn = 4 * (n - 1) * n;

		// 2. 计算点(-n, -n) 到点(X, Y)的距离, 考虑清楚情况
		long sum = 0;
		long px = -n, py = -n;
		long d1 = X - px, d2 = Y - py;
		if (Y > X) {
			sum += (d1 + d2);
		} else {
			sum += (8 * n - d1 - d2);
		}
		System.out.println(sum + Sn);
	}
}
```

# 【单词分析】

【输出一个字符串中出现次数最多与最少的字母及其出现次数】

输入格式：

lanqiao

输出格式：(次数相同时输出字典序最小那一个)

a 2

i 1

```java
import java.util.*;

// char字符相减相加后得到int
// (char)(int+-char)得到char

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine();
		// 利用一个 26 个空间的数组来记录每个字母在一个字符串中出现的次数
		int arr[] = new int[26];
		
		// charAt() 返回字符串中指定索引处的 char
		for (int i = 0; i < s.length(); i++) {
			// s.charAt(i) - 'a' 等于 i 处字符位于 26 个字母的具体位置
			arr[s.charAt(i) - 'a']++;
		}
		
		int max = Integer.MIN_VALUE;
		int min = Integer.MAX_VALUE;
        // 对于char来说，' '是可以的，但是''是错误的！
		char cmax = ' ';
		char cmin = ' ';
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
				cmax = (char) (i + 'a');
			}

			// 将没有出现过的字母跳过，防止没有出现过的字母一直被判断为最少出现
			if (arr[i] == 0) {
				continue;
			} else (arr[i] < min) {
				min = arr[i];
				cmin = (char) (i + 'a');
			}
		}
		System.out.println(cmax + " " + max);
		System.out.print(cmin + " " + min);
	}

}
```

# 【子串分值和】

输入一个字符串，统计出该字符串的每一个非空子串中有几个不同的字母，并将结果打印出来。

输入格式：

ababc

输出格式：

a 1

ab 2

aba 2

abab 2

ababc 3

b 1

ba 2

bab 3

babc 3

a 1

ab 2

abc 3

b 1

bc 2

c 1

```java
import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String s = sc.nextLine();

		for (int x = 0; x < s.length(); x++) {
			for (int y = x + 1; y <= s.length(); y++) {
				String zs = s.substring(x, y);
				// 利用一个 26 个空间的数组来记录每个字母在一个字符串中是否出现过
				boolean arr[] = new boolean[26];

				// charAt() 返回字符串中指定索引处的 char
				for (int i = 0; i < zs.length(); i++) {
					// s.charAt(i) - 'a' 等于 i 处字符位于 26 个字母的具体位置
					arr[zs.charAt(i) - 'a'] = true;
				}

				int count = 0;
				for (int i = 0; i < arr.length; i++) {
					if (arr[i] == true) {
						count++;
					}
				}

				System.out.println(zs + " " + count);
			}
		}
	}

}
```

# 【最优解问题】

【数字三角形】

```
    7
   3 8
  8 1 0
 2 7 4 4
4 5 2 6 5
```

从数字三角形顶部到底部有多条不同的路径。对于每一条路径，把路径上面的数加起来可以得到一个和，累加和最大的路径称为 “最佳路径”。题目的任务就是求出最佳路径上的数字之和。

注意：路径上的每一步只能从一个数走到下一层和它最近的左边或者右边的数。

样例输入：

```
5
7
3 8
8 1 0
2 7 4 4
4 5 2 6 5
```

样例输出：

```
30
```

```java
/*
 * 解题思路：（分治法）
 * 用递归的思想解决
 * 基本思路是：
 * 以d(x, y)表示第 x 行第 y 个数字（x, y都是从1开始算）
 * 以MaxSum(x, y)代表从第 x 行的第 y 个数字到底边的最佳路径的数字之和，
 * 所以要求就是求解 MaxSum(1, 1)
 * 从某个 d(x, y) 出发，显然下一步只能走 d(x+1, y) 或 d(x+1, y+1)
 * 如果走 d(x+1, y) 那么得到的 MaxSum(x, y) 就是 MaxSum(x+1, y) + d(x, y)
 * 如果走 d(x+1, y+1) 那么得到的 MaxSum(x, y) 就是 MaxSum(x+1, y+1) + d(x, y)
 * 所以，只要比较 MaxSum(x+1, y) 和 MaxSum(x+1, y+1) 就知道往哪里走了。
 */

import java.util.*;

public class Main {
	// 由于此处无需创建类便要直接调用函数，所以函数统一为 static 静态类型，
	// 并且由于静态函数中不能直接调用非静态函数，所以成员变量也统一为 static 静态类型。
	public static int[][] d = new int[100][100];
	public static int N;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		for (int i = 1; i <= N; i++) {
			for (int j = 1; j <= i; j++) {
				d[i][j] = sc.nextInt();
			}
		}
		System.out.print(MaxSum(1, 1));
	}

	public static int MaxSum(int x, int y) {
		if (x == N) {
			return d[x][y];
		}
		int sum1 = MaxSum(x + 1, y);
		int sum2 = MaxSum(x + 1, y + 1);
		if (sum1 > sum2) {
			return sum1 + d[x][y];
		} else {
			return sum2 + d[x][y];
		}
	}
}
```

# 【数字三角形】

![](https://img-blog.csdnimg.cn/20210417095203656.png)

```java
import java.util.Scanner;

// 一道普通的dp数字三角形，每一步都来源于左上角或者右上角，所以我们可以递推出结果
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int[][] arr = new int[n + 1][n + 1];
		for (int i = 1; i < arr.length; i++) {
			for (int j = 1; j <= i; j++) {
				int s = sc.nextInt();
				// 某点的最大权值=该点的权值+Max(左上点的最大权值，右上点的最大权值)
				arr[i][j] = s + Math.max(arr[i - 1][j - 1], arr[i - 1][j]);
			}
		}
		// 由于向左与向右的次数相差最多为1，所以出口只会在三角形底边的中央位置
		// 对于偶数行三角形在中间的两个位置之一，对于奇数行三角形在中间位置
		System.out.println(n % 2 == 1 ? arr[n][n / 2 + 1] : Math.max(arr[n][n / 2], arr[n][n / 2 + 1]));
	}
}
```

# 【约数/因数问题】

给定一个数，输出它的所有约数。

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner cs = new Scanner(System.in);
		int n = cs.nextInt();
		for (int i = 1; i <= n; i++) {
			if (n % i == 0) {
				System.out.print(i + " ");
			}
		}
	}
}

/*
42
1 2 3 6 7 14 21 42
*/
```

给定一个数，输出所有相互配对的因数。

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner cs = new Scanner(System.in);
		int n = cs.nextInt();
		for (int i = 1; i <= Math.sqrt(n); i++) {
			if (n % i == 0) {
				System.out.println(i + " " + n / i);
			}
		}
	}
}

/*
18
1 18
2 9
3 6
*/
```

# 【最大公约数问题】

最大公约数也称为最大公因数。

![](https://img-blog.csdnimg.cn/2021041414471930.png)

辗转相除法：

比如，我们计算10和25的最大公约数。用辗转相除法是这么计算的：

25÷10=2······5（余）

10÷5=2······0

那么25和10的最大公约数就是5。

```java
public static int f(int a, int b) {
		if (a % b == 0) {
			return b;
		}
		return f (b, a % b);
}
```

# 【最小公倍数问题】

注意：两个数的最小公倍数 = 两个数相乘 / 两个数的最大公约数。

![](https://img-blog.csdnimg.cn/20210414145438566.png)

```java
import java.util.Scanner;

/**
 * 编写一函数lcm，求两个正整数的最小公倍数
 * 
 * @author Clearlight
 *
 */
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		sc.close();
		
		System.out.println(a*b / f(a,b)); // 最小公倍数 = 两数相乘 / 最大公约数
	}
	
	/**
	 * 使用递归进行求解
	 * 
	 * @param a 输入的数
	 * @param b 输入的数
	 * @return  返回两个数的最大公约数
	 */
	public static int f(int a, int b) {
		
		if(a % b == 0) {
			return b;
		}
		return f(b, a % b);
	}
}

```



# 【逆序问题】

【判断回文】

（回文：正读，倒读都一样的正整数）

输入一组正整数，依次判断是否为回文数。

输入格式：

aaabaaa

cacad

acbca

输出格式：

Y

N

Y

```java
import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
        // hasNext() 判断是否有输入，有则返回 true，没有则返回 false
		while (sc.hasNext()) {
            // next() 返回缓存中的值，且在返回后清空该值
			String s = sc.next();
			StringBuffer sb = new StringBuffer(s);
			// equals() 判断两个对象的值是否相等，前提是类型要相同，否则肯定不相等
			// 所以我们要通过，toString() 方法将 sb 转换为 String 类型
			if (s.equals(sb.reverse().toString())) {
				System.out.println("Y");
			} else {
				System.out.println("N");
			}
		}
	}
}
```

# 【生成随机数】

```java
/*
** Math.random() 方法返回带正号的 double 值，
** 该值 [0.0, 1.0)，返回值是一个伪随机选择的数，在该范围内（近似）均匀分布。 
** Math.random() * N 得到 [0.0, N.0) 的伪随机选择数
** Math.random() * (N+1) 得到 [0.0, N.0] 的伪随机选择数
** 牢记其为 double，注意类型转换！
*/

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// 生成 [50,100] 的随机整数
		int n = (int) (Math.random() * 51 + 50);
		System.out.println(n);
	}
}
```

# 【格式化输出问题】

```java
public class Main {

	public static void main(String[] args) {
		int a = 54;
		long b = 123456789L;
		float c = 3.1415F;
		double d = 3.1415926;
		char e = 'c';
		String f = "jerry";
		boolean g = true;
		boolean h = false;
		short i = 24;
		byte j = 1;

		System.out.printf("\t%d\n", a);
		System.out.printf("\t%d\n", b);
		System.out.printf("\t%.2f\n", c);
		System.out.printf("\t%6.2f\n", d);	// 不足的位在前面补空位
		System.out.printf("\t%c\n", e);
		System.out.printf("\t%s\n", f);
		System.out.printf("\t%b\n", g);
		System.out.printf("\t%b\n", h);
		System.out.printf("\t%d\n", i);
		System.out.printf("\t%d\n", j);
	}
}

```

# 【进制问题】

```java
System.out.printf("%010x\n",x); //按10位十六进制输出，向右靠齐，左边用0补齐

System.out.printf("%010o\n",x); //按10位八进制输出，向右靠齐，左边用0补齐

将得到以下输出：

000000000f
0000000017

System.out.printf("%x\n",x); //按16进制输出
System.out.printf("%o\n",x); //按8进制输出

结果：

f
17
```

十进制转其他进制：整数部分（除 K 取余法，从下往上取）、小数部分（乘 K 取整法，从上往下取）

https://jingyan.baidu.com/article/eb9f7b6dc692e9c79264e878.html

Java 同时提供专门的方法：

```java
public class Main {

	public static void main(String[] args) {
		int a = 14;
		String s = Integer.toBinaryString(a);	// 二进制
		System.out.println(s);
		s = Integer.toHexString(a);		// 十六进制
		System.out.println(s);
		s = Integer.toOctalString(a);	// 八进制
		System.out.println(s);
	}
}
// Double Float 只提供了 十六进制
```

```java
import java.math.BigInteger;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
		// 注意：次方法只支持整数形式的字符串
		BigInteger b = new BigInteger("10");
		System.out.println(b.toString(2));// 以二进制返回该字符串

		b = new BigInteger("1");
		System.out.println(b.toString(2));

		b = new BigInteger("255");
		System.out.println(b.toString(2));

		b = new BigInteger("254");
		System.out.println(b.toString(2));
	}
}

/*
1010
1
11111111
11111110
*/
```

如上，确实能够将一个整数转化成二进制，但是不足之处在于当一个数被转化成二进制时不足8位时，不会自动补0；所以要获得8位二进制数时，要加上判断：

```java
import java.math.BigInteger;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
		// 注意：次方法只支持整数形式的字符串
		BigInteger b = new BigInteger("10");
		String temp = b.toString(2);
		System.out.println(temp);
		int bit = 8 - temp.length();
		if (temp.length() < 8) {
			for (int i = 0; i < bit; i++) {
				temp = "0" + temp;
			}
		}
		System.out.println(temp);
	}
}

/*
1010
00001010
*/
```

# 【数组查找】

```java
import java.util.Arrays;

public class Main {

	public static void main(String[] args) {
		int[] a = {1, 3, 3, 22, 32, 2, 0, 12, 54, 22, 43, 76, 3};
        // 对数字进行升序排序（二分查找的前提）
		Arrays.sort(a);
		for (int n: a) {
			System.out.print(n + " ");
		}
		System.out.println();
        // binartSearch() 对数组进行二分查找
		int index = Arrays.binarySearch(a, 54);
		System.out.println(index);
	}
}

/*
0 1 2 3 3 3 12 22 22 32 43 54 76 
11
*/
```

# 【动态数组】

【ArrayList】顺序表

```java
import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		ArrayList<String> ss = new ArrayList<String>();
		int n = sc.nextInt();
		// 为了接收缓冲区的回车符
		sc.nextLine();
		for (int i = 1; i <= n; i++) {
			String stemp = sc.nextLine();
			ss.add(stemp);
		}
		System.out.println(ss);
	}
}
```

【LinkedList】链表

```java
import java.util.*;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		LinkedList<String> ss = new LinkedList<String>();
		int n = sc.nextInt();
		// 为了接收缓冲区的回车符
		sc.nextLine();
		for (int i = 1; i <= n; i++) {
			String stemp = sc.nextLine();
			ss.add(stemp);
		}
		System.out.println(ss);
	}
}
```

同时，动态数组还提供了丰富的增删查改排序功能，以及将动态数组转换为数组、字符串类型等……

# 【动态数组与普通数组之间的转换】

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
		list.add("a");
		list.add("b");
		list.add("c");
		int size = list.size();
		String[] array = (String[]) list.toArray(new String[size]);
		for (int i = 0; i < array.length; i++) {
			System.out.println(array[i]);
		}
	}
}
```

```java
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		String[] array = new String[3];
		array[0] = "a";
		array[1] = "b";
		array[2] = "c";
		ArrayList<String> arrayList = new ArrayList<String>(Arrays.asList(array));
		for (int i = 0; i < arrayList.size(); i++) {
			System.out.println(arrayList.get(i));
		}
	}
}
```

# 【HashMap】

```java
import java.util.*;

public class Main {

	public static void main(String[] args) {
		char[] ca = { 'a', 'b', 'c', 'a', 'a', 'c', 'b', 'a', 'b', 'a' };
		HashMap<Character, Integer> hc = new HashMap<Character, Integer>();
		for (int i = 0; i < ca.length; i++) {
			// 如果 hashMap 中存在指定的 key 对应的映射关系返回 true，否则返回 false
			if (hc.containsKey(ca[i])) {
				// 对 hashMap 中指定 key 的值进行重新计算
				// 第一个参数：键值；第二个参数：重新映射函数（JDK1.8新增）
				hc.compute(ca[i], (key, value) -> value + 1);
			} else {
				// 将键值对添加到 hashMap 中
				hc.put(ca[i], 1);
			}
		}
		System.out.println(hc);
	}
}

/*
{a=5, b=3, c=2}
*/
```

还有许多许多的方法……

# 【HashSet】

```java
import java.util.*;

public class Main {

	public static void main(String[] args) {
		char[] ca = { 'a', 'b', 'c', 'a', 'a', 'c', 'b', 'a', 'b', 'a' };
		HashSet<Character> hc = new HashSet<Character>();
		for (int i = 0; i < ca.length; i++) {
			hc.add(ca[i]);
		}
		System.out.println(hc);
		
		for (Character i: hc) {
			System.out.println(i);
		}
	}
}

/*
[a, b, c]
a
b
c
*/
```

还有许多许多的方法……

# 【不同子串】

题目：

一个字符串的非空子串是指字符串中长度至少为 1 的连续的一段字符组成 的串。例如，字符串aaab 有非空子串a, b,
aa, ab, aaa, aab, aaab，一共 7 个。 注意在计算时，只算本质不同的串的个数。
请问，字符串0100110001010001 有多少个不同的非空子串？ 【答案提交】
这是一道结果填空的题，你只需要算出结果后提交即可。本题的结果为一 个整数，在提交答案时只填写这个整数，填写多余的内容将无法得分。

思路：

```
> 本题可以利用set性质
> 用双重进行遍历字符串，用substring获得的子串加入set中
> 实现去重功能
```

代码：

```java
import java.util.HashSet;
import java.util.Iterator;

public class Main {
	public static void main(String[] args) {
		HashSet<String> set = new HashSet<String>();
		String s = "0100110001010001";
		for (int i = 0; i < s.length(); i++) {
			for (int j = i + 1; j <= s.length(); j++) {
				set.add(s.substring(i, j));
			}
		}
        // Java Iterator（迭代器）不是一个集合，
        // 它是一种用于访问集合的方法，可用于迭代 ArrayList 和 HashSet 等集合。
        // Iterator 是一个接口
		Iterator<String> iterator = set.iterator();
		while (iterator.hasNext()) {
			System.out.println(iterator.next());
		}
		System.out.println(set.size());
	}
}
```

# 【时间问题】

```java
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

// parse()解析字符串的文本，生成 Date。
// getTime()返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数(long)。

public class Main {

	public static void main(String[] args) throws ParseException {
		calculateTimeDifferenceBySimpleDateFormat();
	}
	
	/**
	* 用SimpleDateFormat计算时间差
	* @throws ParseException 
	*/
	public static void calculateTimeDifferenceBySimpleDateFormat() throws ParseException {
	    SimpleDateFormat simpleFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
	    /*天数差*/
	    Date fromDate1 = simpleFormat.parse("2018-03-01 12:00");  
	    Date toDate1 = simpleFormat.parse("2018-03-12 12:00");  
	    long from1 = fromDate1.getTime();  
	    long to1 = toDate1.getTime();  
        // 直接相减得到的是毫秒
	    int days = (int) ((to1 - from1) / (1000 * 60 * 60 * 24));  
	    System.out.println("两个时间之间的天数差为：" + days);
	 
	    /*小时差*/
	    Date fromDate2 = simpleFormat.parse("2018-03-01 12:00");  
	    Date toDate2 = simpleFormat.parse("2018-03-12 12:00");  
	    long from2 = fromDate2.getTime();  
	    long to2 = toDate2.getTime();  
	    int hours = (int) ((to2 - from2) / (1000 * 60 * 60));
	    System.out.println("两个时间之间的小时差为：" + hours);
	 
	    /*分钟差*/
	    Date fromDate3 = simpleFormat.parse("2018-03-01 12:00");  
	    Date toDate3 = simpleFormat.parse("2018-03-12 12:00");  
	    long from3 = fromDate3.getTime();  
	    long to3 = toDate3.getTime();  
	    int minutes = (int) ((to3 - from3) / (1000 * 60));  
	    System.out.println("两个时间之间的分钟差为：" + minutes);
	}
}
```

# 【遍历日期】

输入日期：

20110101

20111231

输出：

遍历其中的所有日子。

输出一共间隔几天。

```java
import java.util.Scanner;

public class Main {
	static int[] month = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String date1 = sc.next();
		String date2 = sc.next();
		int count = 0;

		int y1 = Integer.parseInt(date1.substring(0, 4));
		int m1 = Integer.parseInt(date1.substring(4, 6));
		int d1 = Integer.parseInt(date1.substring(6, 8));

		int y2 = Integer.parseInt(date2.substring(0, 4));
		int m2 = Integer.parseInt(date2.substring(4, 6));
		int d2 = Integer.parseInt(date2.substring(6, 8));

		while (true) {
			// 遍历到与第二个日期相同时结束循环
			if (y1 == y2 && m1 == m2 && d1 == d2) {
				break;
			}
			
            // 每遍历一次天数+1
			d1++;
			
			// 闰年做特殊处理
			if (m1 == 2) {
				if (y1 % 400 == 0 || y1 % 4 == 0 && y1 % 100 != 0) {
					month[m1] = 29;
				} else {
					month[m1] = 28;
				}
			}
			
			// 天数达到当月最大值时，月份+1，天数归1
			if (d1 > month[m1]) {
				d1 = 1;
				m1++;
			}
			
			// 月数达到最大值时，年份+1，月数归1
			if (m1 > 12) {
				m1 = 1;
				y1++;
			}
			
			String year = "" + y1;
			String month = "" + m1;
			String day = "" + d1;
			
            
            // 解决单位数首位为0的问题
			if (m1 < 10) {
				month = "0" + month;
			}
			
			if (d1 < 10) {
				day = "0" + day;
			}
			
			count++;
			System.out.println(year + month + day);
		}
		System.out.println(count);
	}
}

```

# 【排列组合问题】

数学理论：如何通俗的解释排列公式和组合公式的含义？ - 浣熊数学的回答 - 知乎 https://www.zhihu.com/question/26094736/answer/610713978

![](https://img-blog.csdnimg.cn/20210412231035705.png)

![](https://img-blog.csdnimg.cn/20210412231120547.png)

题目：

​		将 LANQIAO 中的字母重新排列，可以得到不同的单词，如：LANQIAO、AAILNOQ等，注意这 7 个字母都要被用上，单词不一定有具体的英文意义。
　　请问，总共能排列如多少个不同的单词。

解：

​	全排列问题的变形。在 7 个物体中抽取 7 个物体，在几种排列顺序。

​	7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

​	由于 A 出现了两次，所以相同形式的排列会同时又两个，所以最终答案为：5040 / 2 = 2520

此处提醒：对于排除重复性问题，不一定一来就使用 hashset 来做，某些时候，一个除法其实就解决问题了。

同时，全排列还会发生变形，比如某几个元素必须绑定在一起，此时可以把这几个数当做一个数来处理。

# 【阶乘问题】

```java
/*
一个正整数的阶乘（英语：factorial）是所有小于及等于该数的正整数的积，并且有0的阶乘为1。自然数n的阶乘写作n!。

亦即n!=1×2×3×...×n。阶乘亦可以递归方式定义：0!=1，n!=(n-1)!×n。

以下实例演示了 Java 阶乘代码的实现：
*/
public class Main {
    public static void main(String args[]) {
    	for (int counter = 0; counter <= 10; counter++){
    	    System.out.printf("%d! = %d\n", counter, factorial(counter));
    	}
    }
    public static long factorial(long number) {
        if (number <= 1)
            return 1;
        else
            return number * factorial(number - 1);
    }
}


// 同时，阶乘还可以利用循环的方法实现
public class TextFactorial {//操作计算阶乘的类

    public static int simpleCircle(int num){//简单的循环计算的阶乘

        int sum = 1;

        if ( num < 0) {  //判断传入数是否为负数

            throw new IllegalArgumentException("必须为正整数!");//抛出不合理参数异常

        }

        for (int i = 1; i <= num; i++) {//循环num

            sum *= i;//每循环一次进行乘法运算

        }

        return sum;//返回阶乘的值
    }
```

# 【存储单位问题】

| 中文单位 | 中文简称 | 英文单位 | 英文简称 | 关系           |
| -------- | -------- | -------- | -------- | -------------- |
| 位       | 比特     | bit      | b        | 1b = 1个二进制 |
| 字节     | 字节     | Byte     | B        | 1B = 8b        |
| 千字节   | 千字节   | KiloByte | KB       | 1KB = 1024B    |
| 兆字节   | 兆       | MegaByte | MB       | 1MB = 1024KB   |
| 吉字节   | 吉       | GigaByte | GB       | 1GB = 1024MB   |
| 太字节   | 太       | TeraByte | TB       | 1TB = 1024GB   |
| 拍字节   | 拍       | PetaByte | PB       | 1PB = 1024TB   |

注意：1024 = 2<sup>10</sup>

# 【中缀、前缀、后缀表达式】

> 请查阅数据结构书籍

后缀表达式：https://www.jianshu.com/p/94b1ff13de59

前缀表达式：https://blog.csdn.net/weixin_42545675/article/details/103546853

Java 提供了 Stack 类处理栈。

# 【树的计算】

> 请查阅数据结构书籍

**问题描述**

　　有一棵二叉树，一共有 2021 个结点，其中有 1000 个结点有两个子结点，其他的结点有一个或者 0 个子结点。
　　请问，这棵二叉树有多少个叶结点？

**解：**

非空二叉树上的叶子结点数（度为0的节点，称为“叶子结点”）等于度为2的结点数加1，即  。
设度为 0、1、2 的结点个数分别为 n0 n1 n2，二叉树的节点总数 n = n0 + n1 + n2。
n = n2 + n1 + n0 = 2021，n2 = 1000，n0 = n2 + 1 = 1000 + 1 = 1001 。

**问题描述**

​		有一课二叉树有 2021 个结点。 请问这棵二叉树至少有多少个结点？

**解：**

只有根结点和叶结点的二叉树是结点数最少的 n1+n2+n0=n

所以结点个数 = n2 + n0 = 2020 + 2021 = 4041

# 【图的计算】

> 请查阅数据结构书籍

**问题描述**
　　一个无向图包含 2020 条边，如果图中没有自环和重边，请问最少包含多少个结点？

**解：**

重要推论：设 n 为结点数，无向图最大边数 = n(n-1) / 2。（有向图最大边数：n(n-1)），最少边数都是 n-1。
n*(n-1) / 2 = 2020。
结果取正数，向上取整。

答案 = 64

# 【三角函数计算】

前提：在直角三角形中。

正弦 sin = 对边比斜边。

余弦 cos = 邻边比斜边。

正切 tan = 对边比邻边。

关系：sinα/cosα=tanα、sin²α+cos²α=1。

Java 中 Math 类提供了三角函数方法：

Math.PI

Math.sin()

Math.cos()

Math.tan()

Math.toDegrees()	// 把参数转换为角度

Math.toRadian()	// 把角度转换位弧度

# 【面积体积计算】

【三角形面积】

方法1：1/2 * 底 * 高

方法2：1/2 * sinA * b * c 

方法3：

![](https://img-blog.csdnimg.cn/20210415145101191.png)

【圆的周长与面积】

周长：2 * PI * R

面积：PI * R * R

【球体表面积与体积】

![](https://img-blog.csdnimg.cn/20210413003006806.png)

# 【身份证问题】

![](https://img-blog.csdnimg.cn/2021041300342087.png)

X表示10

# 【IP地址问题】

https://img-blog.csdnimg.cn/20210102230731776.png

https://zhidao.baidu.com/question/252825153.html

# 【Java位运算问题】

https://www.runoob.com/java/java-operators.html?_t_t_t=0.5275007858872414

# 【年份问题】

【什么是闰年】

我们居住的地球总是绕着太阳旋转的。地球绕太阳转一圈需要365天5时48分46秒，也就是365.2422天。为了方便，一年定为365天，叫做平年；这样每过四年差不多就要多出一天来，把这一天加在2月里（28+1=29），这一年就有366天，叫做闰年。
通常，每四年里有三个平年一个闰年。公历年份是4的倍数的，一般都是闰年。

按照每四年一个闰年计算，平均每年就要多算出0.0078天，这样经过四百年就会多算出大约3天来，因此，每四百年中要减少三个闰年。所以规定，公历年份是整百数的，必须是400的倍数的才是闰年，不是400的倍数的就是平年。

也就是我们通常所说的：
四年一闰，百年不闰，四百年再闰。

【闰年的计算方法】

一般的在数学运算中，或者在公历纪年法中，能被4整除的大多是闰年，除了那些能被100整除而不能被400整除的年份以外。

①非世纪年能被4整除，且不能被100整除的是闰年。（如2004年是闰年，1901年不是闰年）
②世纪年能被400整除的是闰年。（如2000年少闰年，1900年不是闰年）

```java
if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) 
```



# 【月份问题】

除二月外（平年28、闰年29），大月31天，小月30天。

# 【字典序问题】

两个字符串比较字典序：两个字符串中第一个不同的字符的ASCII码的比较！

String 类提供相应方法：

![](https://img-blog.csdnimg.cn/20210417110834416.png)

# 【字符串编码】

问题描述：

小明发明了一种给由全大写字母组成的字符串编码的方法。
对于每一个大写字母，小明将它转换成它在 26 个英文字母中序号，即 A → 1, B → 2, … Z →26。
这样一个字符串就能被转化成一个数字序列：比如 ABCXYZ → 123242526。
现在给定一个转换后的数字序列，小明想还原出原本的字符串。
当然这样的还原有可能存在多个符合条件的字符串。
小明希望找出其中字典序最大的字符串。
输入格式
一个数字序列。
输出格式
一个只包含大写字母的字符串，代表答案
样例输入
123242526
样例输出
LCXYZ
评测用例规模与约定
对于 20% 的评测用例，输入的长度不超过 20。
对于所有评测用例，输入的长度不超过 200000。

思路分析：

```
> 定义一个arr数组存取26个英文字母，便于使用，对应位置存储
> 首先遍历数列，如果第一个数+第二个数<=26,说明存在字典序更大的字母
> 这样添加后记得i++，因为i向后移动了一位
> 否则添加原位置的字母
> 注意判断i+1是否越界
```

代码：

```java
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		char[] a = { '0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
				'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };
		String data = sc.next();
		char b[] = data.toCharArray();
		for (int i = 0; i < b.length; i++) {
			if (i + 1 < b.length) {
				String data2 = b[i] + "" + b[i + 1];
				int c = Integer.parseInt(data2);
				if (c >= 1 && c <= 26) {
					System.out.print(a[c]);
					i++;
				} else {
					data2 = b[i] + "";
					c = Integer.parseInt(data2);
					System.out.print(a[c]);
				}
			} else {
				String data3 = b[i] + "";
				int c = Integer.parseInt(data3);
				System.out.print(a[c]);
			}
		}
	}
}
```

# 【ASCII码】

'0'：48，'A'：65，'a'：97

# 【斐波那契数列】

![](https://img-blog.csdnimg.cn/20210413090609131.png)

【方法1：递归】

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		System.out.println(fibonacci(n));

	}

	public static long fibonacci(int n) {

		// 特殊情况，分开讨论
		if (n == 1 || n == 2) {
			return 1;
		}
		if (n > 2) {
			// 递归调用
			return fibonacci(n - 1) + fibonacci(n - 2);
		}
		// 如果输入错误的n，一律返回-1，同时对于有返回值的函数来说，无论如何都要有一个默认返回值，否则会报错
		return -1;
	}

}
```

效率太低了，当 n>=40 时，你会发现计算时间明显变长，当 n 接近 50 时，运行窗口等了半天才反应过来。

【方法二：循环】

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		System.out.println(fibonacci(n));

	}

	public static long fibonacci(int n) {
		if (n < 1) {
			return -1;
		}
		if (n == 1 || n == 2) {
			return 1;
		}

		long a = 1L, b = 1L, c = 0L; // 定义三个long类型整数
		for (int i = 0; i < n - 2; i++) {
			c = a + b; 	// 第3个数的值等于前两个数的和
			a = b; 		// 第2个数的值赋值给第1个数
			b = c; 		// 第3个数的值赋值给第2个数
		}
		return c;
	}

}
```

这种方法相比第1中，明显计算速度提高了不是一点两点，哪怕n>10000，都能瞬间完成计算。

# 【菲波那切数列最大公约数】

【问题描述】
斐波那契数列满足 F1 = F2 = 1，从 F3 开始有 Fn = Fn 1 + Fn 2。请你计算
GCD(F2020, F520)，其中 GCD(A, B) 表示 A 和 B 的最大公约数。
【答案提交】
这是一道结果填空题，你只需要算出结果后提交即可。本题的结果为一个
整数，在提交答案时只填写这个整数，填写多余的内容将无法得分

思路分析：

```
> 首先求出两个斐波那契数
> 可以利用递归求，但是在试验时，采用递归花费时间较长，不建议
> 两个结果用BigInteger存取，因为使用long会溢出
> 求最大公约数可以利用欧几里得算法，BigInteger已经包装好，可以直接调用
```

代码：

```java
import java.math.*;

public class Main {
	public static void main(String[] args) {
		BigInteger num1 = fib(2020);
		BigInteger num2 = fib(520);
		System.out.println(num1.gcd(num2));
	}

	public static BigInteger fib(int n) {
		BigInteger a = BigInteger.ONE;
		BigInteger b = BigInteger.ONE;
		BigInteger c = BigInteger.ONE;
		if (n <= 2) {
			return a;
		}
		for (int i = 3; i <= n; i++) {
			c = a.add(b);
			a = b;
			b = c;
		}
		return c;
	}
}
```

# 【汉诺塔】

![](https://img-blog.csdnimg.cn/20210413084803216.png)

```java
public class Main {

    public static void main(String[] args) {
        solve(3);
    }

    public static void solve(int n) {
        // 已知条件n个圆盘和A、B、C三根石柱
        hanoi(n, "A", "B", "C");
    }

    /*
     * 若要让第n个圆盘成功从A移动到C，需要让前n-1个圆盘先从A移动到B，然后让第n个圆盘从A移动到C，
     * 最后让第n-1个圆盘从B移动到C，至于如何将前n-1个圆盘从A移动到B或者从A移动到C，仅仅是和父问
     * 题相同的子问题，采用父问题的解决方案即可。
     */
    private static void hanoi(int n, String a, String b, String c) {
        if (n == 1) {
            // 只有一个圆盘时直接从A石柱移动到C石柱
            move(n, a, c);
        } else {
            // 将前n-1个圆盘从石柱A移动到石柱B
            hanoi(n - 1, a, c, b);
            // 将第n号圆盘从石柱A移动到石柱C
            move(n, a, c);
            // 将前n-1个圆盘从石柱B移动到石柱C
            hanoi(n - 1, b, a, c);
        }
    }

    private static void move(int n, String i, String j) {
        System.out.println("第" + n + "个圆盘，" + "从" + i + "移动到" + j);
    }

}
```

# 【矩阵转置】

【行列数相等的转置】

```java
/**
 * @description 矩阵转置
 * @author oldmonk
 * @time   2017年8月18日
 */
public class test {

    public static void main(String [] args) {
        int data [][] = new int [] [] { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } } ;
        System.out.println("----------------转置前------------------------") ;
        print1(data) ;
        reverse(data) ;
        System.out.println("----------------转置后------------------------") ;
        print1(data) ;
    }

    // 将矩阵转置
    public static void reverse(int temp [][]) {
        for (int i = 0; i < temp.length; i++) {
            for (int j = i; j < temp[i].length; j++) {
                int k = temp[i][j] ;
                temp[i][j] = temp[j][i] ;
                temp[j][i] = k ;
            }
        }
    }

    // 将矩阵输出
    public static void print1(int temp [][]) {
        for (int i = 0; i < temp.length; i++) {
            for (int j = 0; j < temp[i].length; j++) {
                System.out.print(temp[i][j] + "\t") ;
            }
            System.out.println() ;
        }
    }
}
```

![](https://img-blog.csdnimg.cn/20210413085703278.png)

【任意数组转置】

```java
/**
 * @description 任意数组转置
 * @author oldmonk
 * @time   2017年8月18日
 */
public class test2 {

    public static void main(String [] args)// 测试
    {
        double [][] TestMatrix = { { 1, 22, 34, 22 }, { 1, 11, 5, 21 }, { 7, 2, 13, 19 } } ;
        double [][] MatrixC = Transpose(TestMatrix, 3, 4) ;

        System.out.println("-------转置前---------") ;
        myPrint(TestMatrix);
        System.out.println("-------转置后---------") ;
        myPrint(MatrixC);
    }

    /**
     * @descript  任意二维数组转置
     * @author    xujingyang
     * @time      2017年8月17日
     */
    public static double [][] Transpose(double [][] Matrix, int Line, int List) {
        double [][] MatrixC = new double [List] [Line] ;
        for (int i = 0; i < Line; i++) {
            for (int j = 0; j < List; j++) {
                MatrixC[j][i] = Matrix[i][j] ;
            }
        }
        return MatrixC ;
    }

    // 将矩阵输出
    public static void myPrint(double temp [][]) {
        for (int i = 0; i < temp.length; i++) {
            for (int j = 0; j < temp[i].length; j++) {
                System.out.print(temp[i][j] + "\t") ;
            }
            System.out.println() ;
        }
    }
}
```

![](https://img-blog.csdnimg.cn/20210413085747852.png)

# 【基本排序算法】

https://www.cnblogs.com/onepixel/articles/7674659.html

# 【基本查找算法】

https://blog.csdn.net/u011489043/article/details/78683856

# 【特殊数概念】

【自然数】

自然数是指用以计量事物的件数或表示事物次序的数。即用数码0，1，2，[3](https://baike.baidu.com/item/3/5833)，4……所表示的数。自然数由0开始，一个接一个，组成一个无穷的集体。自然数有有序性，无限性。分为偶数和奇数，合数和质数等。

注意：0为偶数，0不是正整数，0不是负数

【因数、约数】

约数，又称[因数](https://baike.baidu.com/item/因数/9539111)。[整数](https://baike.baidu.com/item/整数/1293937)a除以整数b(b≠0) 除得的[商](https://baike.baidu.com/item/商/3820976)正好是整数而没有[余数](https://baike.baidu.com/item/余数/6180737)，我们就说a能被b整除，或b能整除a。a称为b的[倍数](https://baike.baidu.com/item/倍数/7827981)，b称为a的约数。

【质数、素数】

质数，又称素数。是指在大于1的[自然数](https://baike.baidu.com/item/自然数/385394)中，除了1和它本身以外不再有其他[因数](https://baike.baidu.com/item/因数/9539111)的自然数。

【合数】

合数是指在大于1的整数中除了能被1和本身整除外，还能被其他数（0除外）[整除](https://baike.baidu.com/item/整除/2452641)的数。与之相对的是[质数](https://baike.baidu.com/item/质数/263515)，而1既不属于质数也不属于合数。最小的合数是[4](https://baike.baidu.com/item/4/32006)。其中，[完全数](https://baike.baidu.com/item/完全数/370913)与[相亲数](https://baike.baidu.com/item/相亲数/8882907)是以它为基础的。

【完全数】

完全数（Perfect number），又称[完美数](https://baike.baidu.com/item/完美数/871560)或[完备数](https://baike.baidu.com/item/完备数/9450205)，是一些特殊的自然数。它所有的真因子（即除了自身以外的[约数](https://baike.baidu.com/item/约数/8417882)）的和（即因子函数），恰好等于它本身。

例如：第一个完全数是6，它有约数1、2、3、6，除去它本身6外，其余3个数相加，1+2+3=6。第二个完全数是28，它有约数1、2、4、7、14、28，除去它本身28外，其余5个数相加，1+2+4+7+14=28。第三个完全数是496，有约数1、2、4、8、16、31、62、124、248、496，除去其本身496外，其余9个数相加，1+2+4+8+16+31+62+124+248=496。后面的完全数还有8128、33550336等等。

【复数】

我们把形如z=a+bi（a,b均为实数）的数称为复数，其中a称为[实部](https://baike.baidu.com/item/实部/53626919)，b称为虚部，i称为[虚数](https://baike.baidu.com/item/虚数)单位。当z的虚部等于零时，常称z为实数；当z的[虚部](https://baike.baidu.com/item/虚部/5231815)不等于零时，实部等于零时，常称z为[纯虚数](https://baike.baidu.com/item/纯虚数/3386848)。

1. 加法法则

复数的[加法](https://baike.baidu.com/item/加法)按照以下规定的法则进行：设z1=a+bi，z2=c+di是任意两个复数，

则它们的和是 (a+bi)+(c+di)=(a+c)+(b+d)i。

两个复数的和依然是复数，它的实部是原来两个复数实部的和，它的[虚部](https://baike.baidu.com/item/虚部)是原来两个虚部的和。

复数的加法满足交换律和[结合律](https://baike.baidu.com/item/结合律)，

即对任意复数z1，z2，z3，有： z1+z2=z2+z1；(z1+z2)+z3=z1+(z2+z3)。

2. 减法法则

复数的减法按照以下规定的法则进行：设 z1=a+bi，z2=c+di 是任意两个复数，

则它们的差是 (a+bi)-(c+di)=(a-c)+(b-d)i。

两个复数的差依然是复数，它的实部是原来两个复数实部的差，它的[虚部](https://baike.baidu.com/item/虚部)是原来两个虚部的差。

3. 乘法法则

规定复数的乘法按照以下的法则进行：

设 z1=a+bi，z2=c+di (a、b、c、d∈**R**) 是任意两个复数，那么它们的积 (a+bi)(c+di)=(ac-bd)+(bc+ad)i。

其实就是把两个复数相乘，类似两个多项式相乘，展开得: ac+adi+bci+bdi2，因为 i<sup>2</sup>=-1，所以结果是 (ac－bd) + (bc + ad) i 。两个复数的积仍然是一个复数。

4. 除法法则

![](https://img-blog.csdnimg.cn/20210413102124602.png)

【方差】

![](https://img-blog.csdnimg.cn/20210413103521274.png)

【平方和】

![](https://img-blog.csdnimg.cn/2021041310371974.png)

# 【打印菱形】

![](https://img-blog.csdnimg.cn/20210413123310806.png)

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int row = sc.nextInt();
		
		for (int i = 1; i <= row; i++) {
			for (int j = 1; j <= row - i; j++) {
				System.out.print(" ");
			}
			for (int j = 1; j <= i * 2 - 1; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
		for (int i = 1; i <= row - 1; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print(" ");
			}
			for (int j = 1; j <= (row - i) * 2 - 1; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
//		for (int i = row - 1; i >= 1; i--) {
//			for (int j = 1; j <= row - i; j++) {
//				System.out.print(" ");
//			}
//			for (int j = 1; j <= i * 2 - 1; j++) {
//				System.out.print("*");
//			}
//			System.out.println();
		}
	}

}
```

# 【暴力优化】

原则：提前利用数学方法排除一些根本不必要遍历的情况。

![](https://img-blog.csdnimg.cn/2021041423215999.png)

```java
public class Main {
	public static void main(String[] args) {
		int count = 0;
		// 第一个数
		for (int i = 1; i <= 2016; i++) {
			if (f(i) == true) {
				continue;
			}
			// 第二个数
			for (int j = 1; j <= 2016; j++) {
				if (f(j) == true) {
					continue;
				}
				// 暴力优化
				if (j > 2019 - i) {
					break;
				}
				// 第三个数
				for (int k = 1; k <= 2016; k++) {
					if (f(k) == true) {
						continue;
					}
					// 暴力优化
					if (k > 2019 - i - j) {
						break;
					}
					if (i + j + k == 2019 && i != j && i != k && j != k) {
						count++;
					}
				}
			}
		}
        // 3个数字排序会有 3*2*1=6 种重复情况
		System.out.println(count / 6);
	}
	
	public static boolean f(int n) {
		while (n >= 1) {
			if (n % 10 == 2 || n % 10 == 4) {
				return true;
			}
			n /= 10;
		}
		
		return false;
	}
}

// 40785
```

# 【外卖店优先级】

![](https://img-blog.csdnimg.cn/20210415002729363.png)

```java
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int count = 0;
		int n = sc.nextInt();
		int m = sc.nextInt();
		int t = sc.nextInt();
		// 构建一个长度=店铺数量的双行数组，
		// 第一行存放该店铺的订单时刻编号，第二行存放该店铺的优先级。
		int[][] d = new int[2][n];

		for (int i = 1; i <= m; i++) {
			int ts = sc.nextInt();
			int id = sc.nextInt();
			// 如果时刻编号大于须要统计的时间范围，则进入下一次循环。
			if (ts > t) {
				continue;
			}
			// 本次时刻 - 上一次时刻 + 1 = 优先级减少的数量。
			d[1][id - 1] -= ts - d[0][id - 1] - 1;
			d[1][id - 1] += 2;
			d[0][id - 1] = ts;
			// 保证优先级不小于0
			if (d[1][id - 1] < 0) {
				d[1][id - 1] = 0;
			}
		}

		for (int i = 0; i < d[1].length; i++) {
			if (d[1][i] > 5) {
				count++;
			}
		}

		System.out.println(count);
	}
}

// 1
```

# 【深度优先搜索】

【平方拆分】

![](https://img-blog.csdnimg.cn/20210415124017900.png)

```java
public class Main {

	public static void main(String[] args) {
		dfs(2019, 0, 45);
		System.out.println(sum);
	}

	static int sum;

	// 深搜平方和为2019的所有子集
	private static void dfs(int num, int min, int max) {
		if (num < 0) {
			return;
		}
		if (num == 0) {
			sum++;
			return;
		}
		for (int i = min; i < max; i++) {
			// 去重，保证下一位数字一定大于当前数字
			dfs(num - i * i, i + 1, max);
		}
	}
}
```

【全排列】

```java
public class Main {

	public static void main(String[] args) {
		int[] a = { 1, 2, 3, 4 };
		dfs(a, 0, a.length);
	}

	// 交换
	public static void swap(int a[], int i, int j) {
		int temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}

	// 全排列
	public static void dfs(int a[], int index, int length) {
		if (index >= length - 1) {
			output(a);	// 如果到达数组最后一个元素，则输出数组
		} else {
			for (int i = index; i < length; i++) {
				swap(a, index, i);
				dfs(a, index + 1, length);	// 递归
				swap(a, index, i);
			}
		}
	}

	// 输出数组
	public static void output(int a[]) {
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}
		System.out.println("");
	}
}

/*
1 2 3 4 
1 2 4 3 
1 3 2 4 
1 3 4 2 
1 4 3 2 
1 4 2 3 
2 1 3 4 
2 1 4 3 
2 3 1 4 
2 3 4 1 
2 4 3 1 
2 4 1 3 
3 2 1 4 
3 2 4 1 
3 1 2 4 
3 1 4 2 
3 4 1 2 
3 4 2 1 
4 2 3 1 
4 2 1 3 
4 3 2 1 
4 3 1 2 
4 1 3 2 
4 1 2 3 
*/
```

【皇后问题】

有一个 n*n 的国际象棋棋盘（n 行 n 列的方格图），请在棋盘中摆放 n 个受伤的国际象棋皇后，要求：

1. 任何两个皇后不在同一行。
2. 任何两个皇后不在同一列。
3. 如果两个皇后在同一条 45 度角的斜线上，这两个皇后之间行号的差值至少为 3 。

请问一共有多少种摆放方案。

输入描述：

输入的第一行包含一个整数 n。

其中，101≤n≤10。

输出描述：

输出一个整数，表示答案。

输入输出样例：

示例 1

> 输入

```txt
4
```

> 输出

```txt
2
```

代码：

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	// n皇后变种
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		// 在此输入您的代码...
		int n = scan.nextInt();
		int[][] arr = new int[n][n];
		dfs(arr, 0);
		System.out.println(count);
	}

	static int count = 0;

	public static void dfs(int[][] arr, int row) {
		if (row == arr.length) {
			count++;
			return;
		}
		int n = arr.length;
		// 列
		for (int j = 0; j < n; j++) {
			if (checkValid(arr, row, j)) {
				arr[row][j] = 1;
				dfs(arr, row + 1);
				// 回溯
				arr[row][j] = 0;
			}
		}
	}

	public static boolean checkValid(int[][] arr, int row, int col) {
		// 检查列
		for (int i = 0; i < row; i++) {
			if (arr[i][col] == 1) {
				return false;
			}
		}
		// 检查左上45°
		for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (arr[i][j] == 1 && Math.abs(row - i) < 3) {
				return false;
			}
		}
		// 检查右上45°
		for (int i = row - 1, j = col + 1; i >= 0 && j < arr.length; i--, j++) {

			if (arr[i][j] == 1 && Math.abs(row - i) < 3) {
				return false;
			}
		}
		return true;
	}
}
```

【排列小球】

![](https://img-blog.csdnimg.cn/202104161758145.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	static int[] a = new int[3];
	static int res = 0;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int sum = 0;
		for (int i = 0; i < 3; i++) {
			a[i] = sc.nextInt();
			sum = sum + a[i];
		}
		dfs(sum, 0, -1);
		System.out.println(res);
		sc.close();
	}

	// x表示上次统计之后相同小球的个数
	static void dfs(int sum, int x, int last) {
		if (sum == 0) {
			res++;
			return;
		}
		for (int i = 0; i < 3; i++) {
			if (i == last)
				continue;
			// j本次相同小球的个数
			for (int j = x + 1; j <= a[i]; j++) {
				a[i] -= j;
				if (sum >= j)
					dfs(sum - j, j, i);
				a[i] += j;
			}
		}
	}
}
```

# 【分配口罩】

题目：

某市市长获得了若干批口罩，给定每批口罩的数量，
市长要把口罩分配给市内的 2 所医院，由于物流限制，每一批口罩只能全部分配给其中一家医院。
市长希望 2 所医院获得的口罩总数之差越小越好。 请你计算这个差最小是多少？
答案提交
这是一道结果填空题，你只需要算出结果后提交即可。
本题的结果为一个整数，在提交答案时只填写这个整数，填写多余的内容将无法得分。

思路：

```
> 本题是一个典型的递归问题（多路径问题）
> dfs函数的三个参数分别为 k、sum1、sum2
> k代表正在处理数字的下标  
> sum1为1号医院的口罩数量
> sum2位2号医院的口罩数量
> 当k=15时，说明所有口罩全部分配完成，此时要确定最小值和当前两个医院数量的差值
> 函数体中处理的是不同路径
> 第一个是给1号医院分配
> 第二个是给2号医院分配
> 经过多次递归回溯，会计算出所有分配情况的最小值
```

代码：

```java
public class Main {
	public static long res = Long.MAX_VALUE;
	public static long num[] = { 9090400, 8499400, 5926800, 8547000, 4958200, 4422600, 5751200, 4175600, 6309600,
			5865200, 6604400, 4635000, 10663400, 8087200, 4554000 };

	public static void main(String[] args) {
		dfs(0, 0, 0);
		System.out.println(res);
	}

	public static void dfs(int k, long sum1, long sum2) {
		if (k == 15) {
			res = res < Math.abs(sum1 - sum2) ? res : Math.abs(sum1 - sum2);
			return;
		}
		dfs(k + 1, sum1 + num[k], sum2);
		dfs(k + 1, sum1, sum2 + num[k]);
	}
}
```

# 【跳跃】

![](https://img-blog.csdnimg.cn/20210416145658670.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		// 在此输入您的代码...
		int n = scan.nextInt();
		int m = scan.nextInt();
		int[][] map = new int[n + 1][m + 1];
		for (int i = 1; i < n + 1; i++) {
			for (int j = 1; j < m + 1; j++) {
				map[i][j] = scan.nextInt();
			}
		}
		// 定义状态：dp[i][j] 表示从点（1，1）到点（n，m）的最大权值
		int[][] dp = new int[n + 1][m + 1];
		// 初始化（1，1）点的dp
		dp[1][1] = map[1][1];
		for (int i = 1; i < n + 1; i++) {
			for (int j = 1; j < m + 1; j++) {
				if (i == 1 && j == 1) {
					continue;
				}
				int temp = Integer.MIN_VALUE;
				// 依次比较上一个点可能出现的dp并将最大的取出来
				if (i - 3 >= 1)
					temp = Math.max(temp, dp[i - 3][j]);
				if (i - 2 >= 1)
					temp = Math.max(temp, dp[i - 2][j]);
				if (i - 1 >= 1)
					temp = Math.max(temp, dp[i - 1][j]);
				if (j - 3 >= 1)
					temp = Math.max(temp, dp[i][j - 3]);
				if (j - 2 >= 1)
					temp = Math.max(temp, dp[i][j - 2]);
				if (j - 1 >= 1)
					temp = Math.max(temp, dp[i][j - 1]);
				// 该点的dp=上一个点的dp+该点的权值
				dp[i][j] = temp + map[i][j];
			}
		}
		// 输出出口点的dp
		System.out.println(dp[n][m]);

		scan.close();
	}
}
```

# 【两点之间的距离公式】

![](https://img-blog.csdnimg.cn/20210415133858535.png)

# 【序列个数】

![](https://img-blog.csdnimg.cn/20210415220622744.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int i1 = 1; i1 <= 10; i1++) {
            for (int i2 = i1; i2 <= 10; i2++) {
                for (int i3 = i2; i3 <= 10; i3++) {
                    for (int i4 = i3; i4 <= 10; i4++) {
                        for (int i5 = i4; i5 <= 10; i5++) {
                            count++;
                        }
                    }
                }
            }
        }
        System.out.println(count);

    }
}
```

# 【公约数】

![](https://img-blog.csdnimg.cn/20210415222449444.png)

```java
public class Main {

	public static void main(String[] args) {
		int count = 0;
		for (int i = 1; i<= 1010; i++) {
			if (2020 % i == 0 && 3030 % i ==0) {
				count++;
			}
		}
		System.out.println(count);
	}

}
```

# 【扫雷】

![](https://img-blog.csdnimg.cn/20210415230753793.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int m = scan.nextInt();
        int[][] arr1 = new int[n][m];
        int[][] arr2 = new int[n][m];
        for (int i = 0; i < n; i++) {
          for (int j = 0; j < m; j++) {
            arr1[i][j] = scan.nextInt();
          }
        }
        for (int i = 0; i < n; i++) {
          for (int j = 0; j < m; j++) {
            if (arr1[i][j] != 0) {
              arr2[i][j] = 9;
            } else {
              int count = 0;
              // 采用对四个方向单独处理的方式
              // 也可以采用对四个点与四条边单独处理的方式
              // 左上
              if (i - 1 >= 0 && j - 1 >= 0) {
            	  count += arr1[i-1][j-1];
              }
              // 右下
              if (i + 1 < n && j + 1 < m) {
            	  count += arr1[i+1][j+1];
              }
              // 上
              if (i - 1 >= 0) {
            	  count += arr1[i-1][j];
              }
              // 下
              if (i + 1 < n) {
            	  count += arr1[i+1][j];
              }
              // 左
              if (j - 1 >= 0) {
            	  count += arr1[i][j-1];
              }
              // 右
              if (j + 1 < m) {
            	  count += arr1[i][j+1];
              }
              // 右上
              if (i - 1 >= 0 && j + 1 < m) {
            	  count += arr1[i-1][j+1];
              }
              // 左下
              if (i + 1 < n && j - 1 >= 0) {
            	  count += arr1[i+1][j-1];
              }
              arr2[i][j] = count;
            }
          }
        }
        
        for (int i = 0; i < n; i++) {
        	for (int j = 0; j < m; j++) {
        		System.out.print(arr2[i][j] + " ");
        	}
        	System.out.println();
        }
        scan.close();
    }
}
```

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int m = scan.nextInt();
        // 将矩阵四周用0包围，方便边框数据的处理
        int[][] arr1 = new int[n+2][m+2];
        int[][] arr2 = new int[n+2][m+2];
        for (int i = 1; i <= n; i++) {
          for (int j = 1; j <= m; j++) {
            arr1[i][j] = scan.nextInt();
          }
        }
        for (int i = 1; i <= n; i++) {
          for (int j = 1; j <= m; j++) {
            if (arr1[i][j] != 0) {
              arr2[i][j] = 9;
            } else {
              arr2[i][j] = arr1[i][j+1] + arr1[i][j-1] + arr1[i+1][j] + arr1[i-1][j] + arr1[i+1][j+1]+ arr1[i-1][j-1] + arr1[i+1][j-1] + arr1[i-1][j+1];
            }
          }
        }
        
        for (int i = 1; i <= n; i++) {
        	for (int j = 1; j <= m; j++) {
        		System.out.print(arr2[i][j] + " ");
        	}
        	System.out.println();
        }
        scan.close();
    }
}
```

# 【合法日期】

![](https://img-blog.csdnimg.cn/20210415232517989.png)

```java
 import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int month = scan.nextInt();
		int day = scan.nextInt();
		int[] arr = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
		if (month <= 0 || month > 12) {
			System.out.print("no");
		} else {
			if (day >= 1 && day <= arr[month - 1]) {
				System.out.print("yes");
			} else {
				System.out.print("no");
			}
		}
		scan.close();
	}
}
```

# 【灌溉】

![](C:\Users\JERRY\AppData\Roaming\Typora\typora-user-images\image-20210416000250872.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int m = scan.nextInt();
		int t = scan.nextInt();
		// 将矩阵四周用0围起来，方便处理边界数据
		boolean[][] arr = new boolean[n + 2][m + 2];
		boolean[][] arr2 = new boolean[n + 2][m + 2];
		for (int i = 1; i <= t; i++) {
			int r = scan.nextInt();
			int c = scan.nextInt();
			arr[r][c] = true;
			arr2[r][c] = true;
		}
		int k = scan.nextInt();
		for (int x = 1; x <= k; x++) {
			for (int i = 1; i <= n; i++) {
				for (int j = 1; j <= m; j++) {
					if (arr[i][j] == true) {
						// 由于在一个单位时间内，被灌溉的位置不能再向周围灌溉，所以不能直接更新arr
						arr2[i][j+1] = true;
						arr2[i][j-1] = true;
						arr2[i+1][j] = true;
						arr2[i-1][j] = true;
					}
				}
			}
			// 一个时间单位结束后，更新arr
            System.arraycopy(arr2, 0, arr, 0, arr2.length);
			// arr = arr2; 请不要这样做！因为只是同一个地址取不同的名字，会导致数组往后同时更新。
		}
		int count = 0;
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= m; j++) {
				if (arr[i][j] == true) {
					count++;
				}
			}
		}
		System.out.println(count);
		scan.close();
	}
}
```

# 【点数】

![](https://img-blog.csdnimg.cn/20210416001048572.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        //在此输入您的代码...
        int n = 0;
        while (true) {
          n++;
          if ((n * (n - 1) / 2) > 2020) {
            break;
          }
        }
        System.out.print(n);
        scan.close();
    }
}
```

# 【图像模糊】

![](https://img-blog.csdnimg.cn/20210416001849832.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		int m = scan.nextInt();
		int[][] arr = new int[n][m];
		int[][] arr2 = new int[n][m];
		
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				arr[i][j] = scan.nextInt();
			}
		}
		
//		请不要多此一举！因为直接赋值数组名本质上是为同一个数组取一个别名
//		此处arr2为空即可
//		arr2 = arr;
//		即便要对arr2赋值，请使用for循环赋值数组，或使用arraycopy方法
//		System.arraycopy(arr, 0, arr2, 0, arr.length);
		
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				if (i == 0 && j == 0) {
					arr2[i][j] = (arr[i][j] + arr[i][j+1] + arr[i+1][j] + arr[i+1][j+1]) / 4;
				}
				else if (i == 0 && j == m - 1) {
					arr2[i][j] = (arr[i][j] + arr[i][j-1] + arr[i+1][j] + arr[i+1][j-1]) / 4;
				}
				else if (i == n - 1 && j == 0) {
					arr2[i][j] = (arr[i][j] + arr[i-1][j] + arr[i][j+1] + arr[i-1][j+1]) / 4;
				}
				else if (i == n - 1 && j == m - 1) {
					arr2[i][j] = (arr[i][j] + arr[i-1][j] + arr[i][j-1] + arr[i-1][j-1]) / 4;
				}
				else if (i == 0 && j > 0 && j < m - 1) {
					arr2[i][j] = (arr[i][j] + arr[i][j-1] + arr[i][j+1] + arr[i+1][j] + arr[i+1][j-1] + arr[i+1][j+1]) / 6;
				}
				else if (i == n - 1 && j > 0 && j < m - 1) {
					arr2[i][j] = (arr[i][j] + arr[i][j-1] + arr[i][j+1] + arr[i-1][j] + arr[i-1][j-1] + arr[i-1][j+1]) / 6;
				}
				else if (j == 0 && i > 0 && i < n - 1) {
					arr2[i][j] = (arr[i][j] + arr[i-1][j] + arr[i+1][j] + arr[i][j+1] + arr[i+1][j+1] + arr[i-1][j+1]) / 6;
				}
				else if (j == m - 1 && i > 0 && i < n - 1) {
					arr2[i][j] = (arr[i][j] + arr[i-1][j] + arr[i+1][j] + arr[i][j-1] + arr[i-1][j-1] + arr[i+1][j-1]) / 6;
				}
				else {
					arr2[i][j] = (arr[i][j] + arr[i][j+1] + arr[i][j-1] + arr[i+1][j] + arr[i-1][j] + arr[i+1][j+1] + arr[i-1][j-1] + arr[i+1][j-1] + arr[i-1][j+1]) / 9;
				}
			}
		}

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < m; j++) {
				System.out.print(arr2[i][j] + " ");
			}
			System.out.println();
		}
		scan.close();
	}
}
```

# 【谈判】

![](https://img-blog.csdnimg.cn/20210416093103315.png)

```java
import java.util.*;
/*
注意：这里可不是直接把各个部落的人数相加就可以了.
    比如： 9 1 3 5
    9 + 1 = 10; 10 + 3 = 13; 13 + 5 = 18;
	10 + 13 + 18 = 31;
*/
public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		ArrayList<Integer> al = new ArrayList<Integer>();
		for (int i = 0; i < n; i++) {
			al.add(scan.nextInt());
		}
		Collections.sort(al);
		int sum = 0, bz = al.get(0);
		for (int i = 1; i < al.size(); i++) {
			bz += al.get(i);
			sum += bz;
		}
		System.out.println(sum);
	}

}
```

# 【时间加法】

![](https://img-blog.csdnimg.cn/20210416100946424.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int t = scan.nextInt();
        if (b + t > 59) {
          a += (b + t) / 60;
          b = (b + t) % 60;
        } else {
          b += t; 
        }
        System.out.println(a);
        System.out.println(b);
        scan.close();
    }
}
```

# 【三角形面积】

![](https://img-blog.csdnimg.cn/20210416105106220.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        //在此输入您的代码...
        int l = scan.nextInt();
        int h = scan.nextInt();
        if ((l * h) % 2 == 0)
          System.out.println(l*h/2);
        else
          // 注意：此处一定要2.0而不能用2,如果用2那么计算1*h/2的时候就已经把这个整体当做整数了。
          System.out.printf("%.1f", l*h/2.0);
        scan.close();
    }
}
```

# 【删除字符】

![](https://img-blog.csdnimg.cn/20210416171235334.png)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		StringBuffer sb = new StringBuffer(str);
		int s = sb.length();
		int t = sc.nextInt();
		for (int i = 1; i <= t; i++) {
			for (int j = 0; j < s - 1; j++) {
				if (sb.charAt(j) > sb.charAt(j + 1)) {
					sb.deleteCharAt(j);
					break;
				}
			}
		}
		System.out.println(sb);
	}

}
```

# 【数字位数】

![](https://img-blog.csdnimg.cn/2021041617353422.jpg)

```java
import java.util.Scanner;
// 1:无需package
// 2: 类名必须Main, 不可修改

public class Main {
	public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int count = 0;
        for (int i = 1; i <= 2020; i++) {
          String s = String.valueOf(i);
          count += s.length();
        }
        System.out.println(count);
        scan.close();
    }
}
```

# 【分类计数】

题目：

输入一个字符串，请输出这个字符串包含多少个大写字母，多少个小写字母，多少个数字。
【输入格式】
输入一行包含一个字符串。
【输出格式】
输出三行，每行一个整数，分别表示大写字母、小写字母和数字的个数。
【样例输入】
1+a=Aab
【样例输出】
1
3
1
【评测用例规模与约定】
对于所有评测用例，字符串由可见字符组成，长度不超过 100。

思路：

```
> 本题就是个简单的遍历
> 可以利用Character包装类里的方法
> isDigit（char） 判断该字符是否为数字
> isUpperCase（char） 判断该字符是否为大写字母
> isLowerCase（char） 判断字符是否为小写字母
```

代码：

```java
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String string = sc.nextLine();
		int a = 0, b = 0, c = 0;
		for (int i = 0; i < string.length(); i++) {
			if (Character.isDigit(string.charAt(i))) {
				c++;
			} else if (Character.isUpperCase(string.charAt(i))) {
				a++;
			} else if (Character.isLowerCase(string.charAt(i))) {
				b++;
			}
		}
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}
}
```

# 【八次求和】

题目：

【问题描述】
给定正整数 n, 求 1^8 + 2^8 +···+ n^8 mod 123456789 。其中 mod 表示取余。
【输入格式】
输入的第一行包含一个整数 n。
【输出格式】
输出一行，包含一个整数，表示答案。
【样例输入】
2
【样例输出】
257
【样例输入】
987654
【样例输出】
43636805
【评测用例规模与约定】
对于 20% 的评测用例，1≤n≤20。
对于 60% 的评测用例，1≤n≤1000。
对于所有评测用例，1≤n≤1000000。

思路：

```
> 本题可以调用BigInteger.pow()求幂数，如果用Math包里面的pow()可能会溢出，不好处理
> 其余的没什么技术水平
```

代码：

```java
import java.math.BigInteger;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		BigInteger sum = BigInteger.ZERO;
		int n = sc.nextInt();
		for (int i = 1; i <= n; i++) {
			BigInteger b = BigInteger.ONE;
			sum = sum.add(new BigInteger(i + "").pow(8));
		}
		System.out.println(sum.mod(new BigInteger("123456789")));
	}
}
```

# 【购物】

**问题描述：**
杂货铺老板一共有N件物品，每件物品具有ABC三种属性中的一种或多种。从杂货铺老板处购得一件物品需要支付相应的代价。现在你需要计算出如何购买物品，可以使得ABC三种属性中的每一种都在至少一件购买的物品中出现，并且支付的总代价最小。

**输入格式：**
输入第一行包含一个整数N。
　　以下N行，每行包含一个整数C和一个只包含"ABC"的字符串，代表购得该物品的代价和其具有的属性。

**输出格式：**
输出一个整数，代表最小的代价。如果无论如何凑不齐ABC三种属性，输出-1。

**样例输入：**
5
10 A
9 BC
11 CA
4 A
5 B

**样例输出：**
13

**数据规模和约定：**
对于 50% 的评测用例，1 <= N <= 20
对于所有评测用例，1 <= N <= 1000， 1 <= C <= 100000

**题目分析：**
最长字符串满足俩个条件 ① 和 ②。
①同时包含 ABC。
②价值最小
设置 3 层循环每层循环都判断是否满足条件 ①，若满足条件 ①，当前价值和，与之前价值取最小值。
（3 每层循环都要进行判断，满足直接 continue）

```java
import java.util.Scanner;

public class Main {
	static int[] num1;
	static String[] num2;

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		num1 = new int[n];
		num2 = new String[n];
		for (int i = 0; i < n; i++) {
			num1[i] = in.nextInt();
			num2[i] = in.next();
		}
		int temp = 0;
		int min = Integer.MAX_VALUE;
		for (int i = 0; i < n; i++) {
			// 意味当前字符串同时包含ABC
			if (run(i, -1, -1)) {
				temp = 0;
				temp = num1[i];
				// 如果该字符串同时包含ABC并且，他们价值和小于min，则min=temp
				if (min > temp) {
					min = temp;
				}
				continue;
			}
			for (int j = 0; j < n; j++) {
				// 意味当前字符串同时包含ABC
				if (run(i, j, -1)) {
					temp = 0;
					temp = num1[i] + num1[j];
					// 如果该字符串同时包含ABC并且，他们价值和小于min，则min=temp
					if (min > temp) {
						min = temp;
					}
					continue;
				}
				for (int r = 0; r < n; r++) {
					// 意味当前字符串同时包含ABC
					if (run(i, j, r)) {
						temp = 0;
						temp = num1[i] + num1[j] + num1[r];
						// 如果该字符串同时包含ABC并且，他们价值和小于min，则min=temp
						if (min > temp) {
							min = temp;
						}
						continue;
					}
				}
			}
		}
		if (min != Integer.MAX_VALUE) {
			System.out.println(min);
		} else {
			System.out.println(-1);
		}
	}

	// 每次传要操作字符数组的下标，进行判断
	// 如果包含abc则返回true，否则返回false
	public static boolean run(int index1, int index2, int index3) {
		String temp = "";
		// 如果index2,index3同时为-1则说明当前操作为第一层循环
		if (index1 != -1 && index2 == -1 && index3 == -1) {
			temp += num2[index1];
		}
		// 如果只有index3为-1则说明当前操作为第二层循环
		if (index1 != -1 && index2 != -1 && index3 == -1) {
			temp += num2[index1];
			temp += num2[index2];
		}
		// 如果index1,index2,index3都不为-1说明当前操作为第三层循环
		if (index1 != -1 && index2 != -1 && index3 != -1) {
			temp += num2[index1];
			temp += num2[index2];
			temp += num2[index3];
		}
		if (temp.contains("A") && temp.contains("B") && temp.contains("C")) {
			return true;
		}
		return false;
	}
}
```

