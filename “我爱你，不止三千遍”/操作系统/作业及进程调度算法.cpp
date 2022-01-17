// 引入头文件
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <time.h>
#include <limits.h>
#include <memory.h>
#include <algorithm>
#include <vector>
#include <queue>

// 命名空间：所谓 namespace 是指标识符的各种可见范围。
// C＋＋ 标准程序库中的所有标识符都被定义于一个名为 std 的 namespace 中。
using namespace std;

// 定义作业及进程结构体
typedef struct node
{
	int number;		 // 编号
	int reach_time;	 // 抵达时间
	int need_time;	 // 执行时间
	int privilege;	 // 优先权
	float excellent; // 响应比
	int start_time;	 // 开始时间
	int wait_time;	 // 等待时间
	int tr_time;	 // 周转时间
	double wtr_time; // 带权周转时间
	int run_time;	 // 累计已执行时间
	bool visited;	 // 是否被访问过
	int finish_time; // 完成时间
	bool reached;	 // 是否抵达
} job;

//数据设置区域
const int MAX_NUM = 10;	   // 最大作业数量
const int MAX_LINE = 1024; //一行的size
int num = 0;			   // 实际作业或进程数量
job jobs[MAX_NUM];		   // 作业或进程结构体数组
int ready[MAX_NUM];		   // 就绪队列
int order[MAX_NUM];		   // 排序使用哪个数值作为排序对象

// 函数声明
void initial_jobs();					 // 初始化所有作业信息
void init_Jobdata();					 // 初始化数据
void initial_jobs_again();				 // 对作业完成时间、响应比、周转时间、带权周转时间进行初始化
void sleep(int n);						 // 停顿几秒，模拟调度
void print_1(int a, int b, int c);		 // 执行步骤打印函数-1
void print_2(int a, int b, float c);	 // 执行步骤打印函数-2
void print_3(float a, float b, float c); // 执行步骤打印函数-3
void FCFS();							 // 先来先服务 FCFS --- 杨志颖
void SJF();								 // 短作业优先 SJF（非抢占式）--- 苏爽
void HRRF();							 // 高相应比优先 HRRF --- 毛春燕
void HPF();								 // 时间片轮转 RR --- 周吉瑞
void RR();								 // 高优先级优先 HPF（非抢占式）--- 高淑杰

// 主函数
int main()
{
	initial_jobs(); // 初始化所有作业信息
	init_Jobdata(); // 初始化数据文件
	int choice = 1;
	while (choice != 0)
	{
		printf("----------------------------------------------------------------\n");
		printf("-----------------------作业及进程调度算法-----------------------\n\n");
		printf("            1、先来先服务FCFS --- 杨志颖\n");
		printf("            2、短作业优先SJF（非抢占式）--- 苏爽\n");
		printf("            3、高相应比优先HRRF --- 毛春燕\n");
		printf("            4、时间片轮转RR --- 周吉瑞\n");
		printf("            5、高优先级优先HPF（非抢占式）--- 高淑杰\n");
		printf("            0、退出\n\n");
		printf("----------------------------------------------------------------\n");
		printf("----------------------------------------------------------------\n");
		printf("请输入一个编号：");
		scanf("%d", &choice);
		switch (choice)
		{
		case 1:
			FCFS();
			break;
		case 2:
			SJF();
			break;
		case 3:
			HRRF();
			break;
		case 4:
			RR();
			break;
		case 5:
			HPF();
			break;
		case 0:
			printf("退出程序。\n");
			break;
		}
	}
}

// 初始化所有作业信息
void initial_jobs()
{
	for (int i = 0; i < MAX_NUM; i++)
	{
		jobs[i].excellent = 0;
		jobs[i].need_time = 0;
		jobs[i].number = 0;
		jobs[i].privilege = 0;
		jobs[i].reach_time = 0;
		jobs[i].run_time = 0;
		jobs[i].start_time = 0;
		jobs[i].tr_time = 0;
		jobs[i].visited = false;
		jobs[i].wait_time = 0;
		jobs[i].wtr_time = 0;
		jobs[i].finish_time = 0;
		jobs[i].reached = false;
	}
}

// 初始化数据
void init_Jobdata()
{
	// 把缓冲区内最后剩余的数据输出到内核缓冲区，并释放文件指针和有关的缓冲区。
	int mydata[7][4] = {{1, 800, 50, 0},
						{2, 815, 30, 1},
						{3, 830, 25, 2},
						{4, 835, 20, 2},
						{5, 845, 15, 2},
						{6, 700, 10, 1},
						{7, 820, 5, 0}};
	num++;
	while (num != 8)
	{
		jobs[num].number = mydata[num - 1][0];
		jobs[num].reach_time = mydata[num - 1][1];
		jobs[num].need_time = mydata[num - 1][2];
		jobs[num].privilege = mydata[num - 1][3];
		num++;
	}
	num--;
	printf("init data success!\n");
	printf("作业的数量为: %d\n", num);
	// 输出显示作业号、作业抵达时间、作业的执行时间、作业的优先权。
	printf("编号\t抵达时间\t执行时间\t优先权\n");
	for (int j = 1; j <= num; j++)
	{
		printf("%d\t%d\t\t%d\t\t%d\n", jobs[j].number, jobs[j].reach_time, jobs[j].need_time, jobs[j].privilege);
	}
}

// 对作业完成时间、响应比、周转时间、带权周转时间进行初始化，将作业是否被访问过设置为 false。
void initial_jobs_again()
{
	for (int i = 1; i <= num; i++)
	{
		jobs[i].finish_time = 0;
		jobs[i].excellent = 0;
		jobs[i].tr_time = 0;
		jobs[i].wtr_time = 0;
		jobs[i].wait_time = 0;
		jobs[i].visited = false;
	}
}

// 停顿几秒（模拟）
void sleep(int n)
{
	clock_t goal;
	goal = (clock_t)n * CLOCKS_PER_SEC + clock();
	while (goal > clock())
		;
}

// 执行步骤打印函数-1
void print_1(int a, int b, int c)
{
	printf("第%d个作业", a);
	printf("到达时间：%d,服务时间：%d\n", b, c);
	printf("本作业正在运行...........\n");
	printf("运行完毕\n");
}

// 执行步骤打印函数-2
void print_2(int a, int b, float c)
{
	printf("等待时间：%d 周转时间：%d 带权周转时间：%0.2f\n", a, b, c);
}

// 执行步骤打印函数-3
void print_3(float a, float b, float c)
{
	printf("************************所有作业调度完毕************************\n");
	printf("平均等待时间：%.2f 平均周转时间：%.2f 平均带权周转时间：%.2f\n\n", a, b, c);
}

// 先来先服务 FCFS --- 杨志颖
void FCFS()
{
	int i, j, temp;
	double sum1 = 0; // 总的等待时间
	double sum2 = 0; // 总的周转时间
	double sum3 = 0; // 总的带权周转时间

	// num：作业或进程数
	for (i = 1; i <= num; i++)
	{
		order[i] = jobs[i].reach_time; // 将作业的抵达时间存储到 order 数组中
		ready[i] = i;				   // 就绪队列
	}

	// 冒泡排序
	// 按照到达时间大小排序
	// 将 order[num] 排序后得到的就绪顺序赋给 ready[num]
	for (i = 1; i <= num; i++)
	{
		for (j = 1; j <= num - i; j++)
		{
			// 前一个作业的抵达时间 晚于 后一个作业抵达时间
			if (order[j] > order[j + 1])
			{
				// 排时间
				temp = order[j];
				order[j] = order[j + 1];
				order[j + 1] = temp;
				// 排次序
				temp = ready[j];
				ready[j] = ready[j + 1];
				ready[j + 1] = temp;
			}
		}
	}

	// 进行的调度
	for (i = 1; i <= num; i++)
	{
		print_1(ready[i], jobs[ready[i]].reach_time, jobs[ready[i]].need_time);
		sleep(1); // 模拟调度（睡眠一秒）。

		// 计算第一个作业的完成时间，为等待时间赋值。
		if (i == 1)
		{
			// 第一个作业的完成时间 = 抵达时间 + 执行时间
			jobs[ready[i]].finish_time = jobs[ready[i]].reach_time + jobs[ready[i]].need_time;
			// 第一个作业的等待时间默认为 0
			jobs[ready[i]].wait_time = 0;
		}
		else
		{
			// 如果上一个作业的完成时间 > 下一个作业的到达时间，则下一个作业的开始时间从上一个的完成时间开始。
			if (jobs[ready[i - 1]].finish_time > jobs[ready[i]].reach_time)
			{
				// 该作业的结束时间 = 上一个作业的结束时间 + 该作业的执行时间。
				jobs[ready[i]].finish_time = jobs[ready[i - 1]].finish_time + jobs[ready[i]].need_time;
				// 该作业的等待时间 = 上一个作业的结束时间 - 该作业的抵达时间。
				jobs[ready[i]].wait_time = jobs[ready[i - 1]].finish_time - jobs[ready[i]].reach_time;
			}
			else
			{
				// 该作业的完成时间 = 该作业的执行时间 + 该作业的抵达时间。
				jobs[ready[i]].finish_time = jobs[ready[i]].need_time + jobs[ready[i]].reach_time;
				// 该作业抵达时没有作业在执行，所以等待时间为 0。
				jobs[ready[i]].wait_time = 0;
			}
		}

		// 作业周转时间 = 结束时间 - 抵达时间。
		jobs[ready[i]].tr_time = jobs[ready[i]].finish_time - jobs[ready[i]].reach_time;
		// 作业带权周转时间 = 周转时间 / 执行时间。
		jobs[ready[i]].wtr_time = double(jobs[ready[i]].tr_time) / jobs[ready[i]].need_time;

		print_2(jobs[ready[i]].wait_time, jobs[ready[i]].tr_time, jobs[ready[i]].wtr_time);

		// 累加
		sum1 += jobs[ready[i]].wait_time;
		sum2 += jobs[ready[i]].tr_time;
		sum3 += jobs[ready[i]].wtr_time;
	}

	// 求平均值并输出
	print_3(sum1 / num, sum2 / num, sum3 / num);

	initial_jobs_again(); // 对作业完成时间、响应比、周转时间、带权周转时间进行初始化，将作业是否被访问过设置为 false。
}

// int index = findNextSJF(jobs, num, finish);	对作业进行判断，选出下一个要执行的作业。
int findNextSJF(job j[MAX_NUM], int length, int time)
{
	// p 是已经到达且拥有最短运行时间的进程的下标
	// q 是没有到达的进程中拥有最早到达时间的进程的下标
	int i, p, q;
	int minNeedTime, minReachTime, minTime;

	p = q = -1;
	minTime = minNeedTime = minReachTime = INT_MAX;

	for (i = 1; i <= length; i++)
	{
		// 该作业没有被访问过。
		if (!j[i].visited)
		{
			// 第一情况
			// 该作业的抵达时间 <= 前面求出的最短作业抵达时间，并且该作业的执行时间 <= 当前的最短作业执行时间。
			if (j[i].reach_time <= time && j[i].need_time <= minNeedTime)
			{
				p = i;
				minNeedTime = j[i].need_time;
			}
			// 第二种情况
			// 该作业的抵达时间 > 前面求出的最短作业抵达时间，并且该作业抵达时间 <= 当前的最短作业抵达时间。
			else if (j[i].reach_time > time && j[i].reach_time <= minReachTime)
			{
				// 该作业的执行时间 小于 minTime。
				if (j[i].need_time < minTime)
				{
					q = i;
					minReachTime = j[i].reach_time;
					minTime = j[i].need_time;
				}
			}
		}
	}

	// p 为 -1 时,代表在 lastTime 时刻还没进程到达，此时选择下一个最早到达的进程 q
	if (p != -1)
	{
		return p;
	}

	return q;
}

// 短作业优先 SJF（非抢占式）--- 苏爽
void SJF()
{
	int i, j;
	double sum1 = 0;	  // 总的等待时间
	double sum2 = 0;	  // 总的周转时间
	double sum3 = 0;	  // 总的带权周转时间
	int finish = INT_MAX; // 当前完成时间

	for (i = 1; i <= num; i++)
	{
		// 返回给定参数表中的最小值。 将最早作业抵达时间赋值给 finish。
		finish = min(finish, jobs[i].reach_time);
	}

	printf("短作业优先算法: \n");
	for (i = 1; i <= num; i++)
	{
		// 对作业进行判断，选出下一个要执行的作业。
		int index = findNextSJF(jobs, num, finish);
		print_1(index, jobs[index].reach_time, jobs[index].need_time);
		sleep(1); // 模拟调度（睡眠一秒）。

		// 该作业抵达时间 <= 前面求出的最短作业抵达时间。
		if (jobs[index].reach_time <= finish)
		{
			// 该作业的等待时间 = 前面求出的最短作业抵达时间 - 该作业抵达时间。
			jobs[index].wait_time = finish - jobs[index].reach_time;
			// 该作业的开始时间 = 前面求出的最短作业时间。
			jobs[index].start_time = finish;
		}
		else
		{
			// 该作业的开始时间 = 该作业的抵达时间。
			jobs[index].start_time = jobs[index].reach_time;
			// 代表该作业一来就执行，没有等待。
			jobs[index].wait_time = 0;
		}

		jobs[index].finish_time = jobs[index].start_time + jobs[index].need_time;	// 作业完成时间 = 作业开始时间 + 作业执行时间。
		jobs[index].tr_time = jobs[index].finish_time - jobs[index].reach_time;		// 周转时间 = 结束时间 - 抵达时间。
		jobs[index].wtr_time = (double)jobs[index].tr_time / jobs[index].need_time; // 带权周转时间 = 周转时间 / 执行时间。
		jobs[index].visited = true;													// 将该作业的访问标志改为 true。

		// 累加
		sum1 += jobs[index].wait_time;	  // 总的等待时间
		sum2 += jobs[index].tr_time;	  // 总的周转时间
		sum3 += jobs[index].wtr_time;	  // 总的带权周转时间
		finish = jobs[index].finish_time; // 将该作业的结束时间赋值给 finish。

		print_2(jobs[index].wait_time, jobs[index].tr_time, jobs[index].wtr_time);
	}
	// 求平均值并输出
	print_3(sum1 / num, sum2 / num, sum3 / num);

	initial_jobs_again(); // 对作业完成时间、响应比、周转时间、带权周转时间进行初始化，将作业是否被访问过设置为 false。
}

// int index = findNextHRRF(pre);
int findNextHRRF(int pre)
{
	int current = 1, i, j;
	for (i = 1; i <= num; i++)
	{
		// 该作业没有被访问过。
		if (!jobs[i].visited)
		{
			// 该作业的等待时间 = 上一个作业的完成时间 - 该作业到达时间。
			jobs[i].wait_time = jobs[pre].finish_time - jobs[i].reach_time;
			// 响应比 = （ 等待时间 + 执行时间 ） / 执行时间。
			jobs[i].excellent = (float)(jobs[i].wait_time + jobs[i].need_time) / jobs[i].need_time;
		}
	}

	for (i = 1; i <= num; i++)
	{
		if (!jobs[i].visited)
		{
			// 该作业没有被访问过。
			current = i;
			// 找到第一个还没执行的作业。
			break;
		}
	}

	// 和后面的作业比较。
	for (j = i; j <= num; j++)
	{
		// 该作业没有被访问过。
		if (!jobs[j].visited)
		{
			// 该作业的抵达时间 小于 pre 作业的完成时间， 提前到达。
			if (jobs[current].reach_time < jobs[pre].finish_time)
			{
				// 该作业的响应比 大于 第一个没有执行的作业。
				if (jobs[j].excellent > jobs[current].excellent)
					// 将高响应比的作业号赋值给 current。
					current = j;
			}
			// 如果进程是在上一个进程完成之后到达。
			else
			{
				// 该作业的抵达时间 小于 第一个还没有执行的作业。
				if (jobs[j].reach_time < jobs[current].reach_time)
				{
					// 找出比较早到达的一个。
					current = j;
				}
				// 如果同时到达，并且该作业的响应比 大于 第一个还没有执行的作业的响应比。
				else if (jobs[j].reach_time == jobs[current].reach_time && jobs[j].excellent > jobs[current].excellent)
				{
					// 将高响应比的作业号赋值给 current。
					current = j;
				}
			}
		}
	}
	return current; //返回响应比最高的作业。
}

// 高相应比优先 HRRF --- 毛春燕
void HRRF()
{
	int i, j;
	double sum1 = 0; // 总的等待时间。
	double sum2 = 0; // 总的周转时间。
	double sum3 = 0; // 总的带权周转时间。

	printf("高响应比优先调度算法: \n");
	int pre = 1;
	jobs[1].finish_time = 0; // 将第一个作业的完成时间赋值为 0。

	for (i = 1; i <= num; i++)
	{
		// 调用函数，求出到达作业中响应比最高的作业返回。
		int index = findNextHRRF(pre);

		print_1(index, jobs[index].reach_time, jobs[index].need_time);
		sleep(1); // 模拟调度（睡眠一秒）。

		if (i == 1)
		{
			jobs[index].start_time = jobs[index].reach_time;						  // 第一个作业的开始时间 = 该作业的抵达时间。
			jobs[index].finish_time = jobs[index].start_time + jobs[index].need_time; // 第一个作业的完成时间 = 该作业的开始时间 + 该作业的执行时间。
			jobs[index].tr_time = jobs[index].need_time;							  // 第一个作业的周转时间 = 该作业的执行时间。
			jobs[index].wtr_time = 1.00;											  // 第一个作业的带权周转时间 = 1 。
			jobs[index].wait_time = 0;												  // 第一个作业的等待时间 = 0 。
		}
		else
		{
			// 该作业的抵达时间 大于 pre 的完成时间。
			if (jobs[index].reach_time > jobs[pre].finish_time)
			{
				jobs[index].wait_time = 0;
				jobs[index].start_time = jobs[index].reach_time; // 该作业的开始时间 = 该作业的抵达时间。
			}
			else
			{
				jobs[index].start_time = jobs[pre].finish_time;							// 该作业的开始时间 = pre 的完成时间。
				jobs[index].wait_time = jobs[pre].finish_time - jobs[index].reach_time; // 该作业的等待时间 = pre 的完成时间 - 该作业的抵达时间。
			}
			jobs[index].finish_time = jobs[index].start_time + jobs[index].need_time;	// 该作业的完成时间 = 该作业的开始时间 + 该作业的执行时间。
			jobs[index].tr_time = jobs[index].finish_time - jobs[index].reach_time;		// 周转时间 = 完成时间 - 抵达时间。
			jobs[index].wtr_time = (double)jobs[index].tr_time / jobs[index].need_time; // 带权周转时间 = 周转时间 / 执行时间。
		}

		jobs[index].visited = true;	   // 将该作业的访问标志改为 true。
		pre = index;				   // 把执行完的作业的下标赋值给 pre，用于后面一个作业的判断。
		sum1 += jobs[index].wait_time; // 总的等待时间。
		sum2 += jobs[index].tr_time;   // 总的周转时间 。
		sum3 += jobs[index].wtr_time;  // 总的带权周转时间 。

		print_2(jobs[index].wait_time, jobs[index].tr_time, jobs[index].wtr_time);
	}
	print_3(sum1 / num, sum2 / num, sum3 / num);

	initial_jobs_again(); // 对作业完成时间、响应比、周转时间、带权周转时间进行初始化，将作业是否被访问过设置为 false。
}

// 按照先来先服务并使用时间片轮转
vector<job> jobList; // jobList 向量。
int time_unit = 10;	 // 时间片长度设置为 10。

void initial_job_List()
{
	// 给向量初始化
	for (int i = 1; i <= num; i++)
	{
		jobList.push_back(jobs[i]);
	}
}

bool cmp(job a, job b)
{
	return a.reach_time < b.reach_time; // 返回小的作业抵达时间。
}

/*
queue类是一个 FIFO（先入先出）的数据结构。 
q.empty():判断队列 q 是否为空，当队列 q 空时，返回 true; 否则为 false（值为0(false)/1(true)）。
q.push():会将一个元素 a 置入队列 q 中。
q.pop()：会从队列 q 中移除第一个元素。(不可写成 pop(q)) 
*/

// 时间片轮转 RR --- 周吉瑞
void RR()
{
	double sum1 = 0; // 总的等待时间
	double sum2 = 0; // 总的周转时间
	double sum3 = 0; // 总的带权周转时间

	initial_job_List();						   // 调用函数对向量进行初始化
	queue<job> Ready;						   // 就绪队列
	sort(jobList.begin(), jobList.end(), cmp); // 对数组的元素进行排序,前两个参数为开始的地址和结束的地址
	int begin = (*jobList.begin()).reach_time; // 将 jobList 向量的第一个作业的抵达时间赋值给 begin
	Ready.push(*jobList.begin());			   // 将 jobList 向量中的作业置入 Ready 队列中
	jobList.erase(jobList.begin());			   // 将 jobList 向量中的第一个作业清除

	// jobList 向量和 Ready 队列都不为空。
	while (!jobList.empty() || !Ready.empty())
	{
		// 有新作业到达，加入就绪队列。
		while (!jobList.empty() && begin >= (*jobList.begin()).reach_time)
		{
			Ready.push(*jobList.begin());	// 将 jobList 向量中的作业置入 Ready 队列中。
			jobList.erase(jobList.begin()); // 将 jobList 向量中的第一个作业清除。
		}
		// Ready 队列完成时间 + 时间片时间 < 该作业的执行时间，时间片用完没运行完,加入队尾。
		if (Ready.front().finish_time + time_unit < Ready.front().need_time)
		{
			printf("%d 号作业执行了 %d\n", Ready.front().number, time_unit);
			Ready.front().finish_time += time_unit; // 该作业的完成时间 = 该作业的完成时间 + 时间片时间。
			begin += time_unit;						// begin = begin + 时间片时间。
			// 有新作业到达，加入就绪队列。
			while (!jobList.empty() && begin >= (*jobList.begin()).reach_time)
			{
				Ready.push(*jobList.begin());	// 将 jobList 向量中的作业置入Ready队列中。
				jobList.erase(jobList.begin()); // 将 jobList 向量中的第一个作业清除。
			}

			Ready.push(Ready.front()); // 将 Ready 队列中的第一个作业置入 Ready 队列中，现在置入到队列的尾部。
			Ready.pop();			   // 从 Ready 队列中移除第一个作业。
			sleep(1);				   // 模拟调度（睡眠一秒）。
		}
		else
		{ //作业运行完
			if (Ready.front().need_time - Ready.front().finish_time < time_unit)
			{																	  // 作业执行时间 - Ready 队列第一个作业的完成时间 < 时间片时间。
				time_unit -= Ready.front().need_time - Ready.front().finish_time; // 该作业的执行的时间片长度 = 执行时间 - Ready 队列第一个作业的完成时间。
			}
			else
			{
				time_unit = 10;
			}
			printf("%d 号作业执行了 %d\n", Ready.front().number, time_unit);
			begin += time_unit;																						  // begin = begin + 时间片时间。
			Ready.front().finish_time = begin;																		  // Ready 队列第一个作业完成时间 = begin。
			Ready.front().wait_time = Ready.front().finish_time - Ready.front().reach_time - Ready.front().need_time; // Ready 队列第一个作业的等待时间 = 完成时间 - 抵达时间 - 执行时间。
			Ready.front().tr_time = Ready.front().finish_time - Ready.front().reach_time;							  // Ready 队列第一个作业周转时间 = 完成时间 - 抵达时间。
			Ready.front().wtr_time = (double)Ready.front().tr_time / Ready.front().need_time;						  // Ready 队列第一个作业带权周转时间 = 周转时间 / 执行时间。
			sum1 += Ready.front().wait_time;																		  // 总的等待时间。
			sum2 += Ready.front().tr_time;																			  // 总的周转时间。
			sum3 += Ready.front().wtr_time;																			  // 总的带权周转时间。
			printf("执行完的作业是 %d 号作业，等待时间是 %d ,周转时间是 %d ,带权周转时间是 %.2f\n", Ready.front().number, Ready.front().wait_time, Ready.front().tr_time, Ready.front().wtr_time);
			Ready.pop(); // 从 Ready 队列中移除第一个作业。
			// 如果 Ready 队列为空并且 jobList 向量不为空。
			if (Ready.empty() && !jobList.empty())
			{
				// 对数组的元素进行排序，前两个参数为开始的地址和结束的地址
				sort(jobList.begin(), jobList.end(), cmp);
				// 找出当前最早的作业号
				printf("找到当前最早的作业是: %d\n", (*jobList.begin()).number);
				// 将最早的作业抵达时间赋值给 begin
				begin = (*jobList.begin()).reach_time;
			}
			if (time_unit < 10)
			{
				// 作业的执行时间片 小于 10shi ,将时间片赋值为 10。
				time_unit = 10;
			}
			sleep(1); // 模拟调度（睡眠一秒）。
		}
	}
	print_3(sum1 / num, sum2 / num, sum3 / num);
	initial_jobs_again(); // 对作业完成时间、响应比、周转时间、带权周转时间进行初始化，将作业是否被访问过设置为 false。
}

// int index = findNextHPF(jobs, num, finish);
int findNextHPF(job j[MAX_NUM], int length, int time)
{
	// 优先值越低 表示优先权越高
	// p 是已经到达且拥有最高优先权的进程的下标
	// q 是没有到达的进程中拥有最早到达时间的进程的下标
	int i, p, q;
	int minReachTime, minPrivilege1;
	p = q = -1;
	minPrivilege1 = minReachTime = INT_MAX;
	for (i = 1; i <= length; i++)
	{
		if (!j[i].visited)
		{
			// 该作业没有被访问过。
			// 第一情况
			// 该作业的抵达时间 小于等于 前面求出的最短作业抵达时间，并且该作业的优先权 小于等于 minPrivilege1。
			if (j[i].reach_time <= time && j[i].privilege <= minPrivilege1)
			{
				if (j[i].privilege == j[p].privilege)
				{
					// 如果优先权一致 则按最早抵达时间
					if (j[i].reach_time < j[p].reach_time)
					{
						// 该作业的抵达时间 小于 目前作业的抵达时间。
						p = i;
					}
				}
				else
				{
					// i 作业的优先权 高于 p 作业的优先权。
					p = i;
					minPrivilege1 = j[i].privilege; // 将 i 作业的优先权赋值给 minPrivilege1。
				}
			}
			// 第二种情况
			// 该作业的抵达时间 大于 前面求出的最短作业抵达时间，并且该作业的抵达时间 小于等于 minReachTime。
			else if (j[i].reach_time > time && j[i].reach_time <= minReachTime)
			{
				q = i;
				minReachTime = j[i].reach_time; // 将 i 作业的抵达时间赋值给 minReachTime。
			}
		}
	}
	// p为 -1 时,代表在 time 时刻还没进程到达，此时选择下一个最早到达的进程 q。
	if (p != -1)
	{
		return p;
	}

	return q;
}

// 高优先级优先 HPF（非抢占式）--- 高淑杰
void HPF()
{
	int i, j;
	double sum1 = 0;	  // 总的等待时间。
	double sum2 = 0;	  // 总的周转时间。
	double sum3 = 0;	  // 总的带权周转时间。
	int finish = INT_MAX; // 当前完成时间。
	for (i = 1; i <= num; i++)
	{
		//返回给定参数表中的最小值。 将最早作业抵达时间赋值给 finish。
		finish = min(finish, jobs[i].reach_time);
	}
	printf("优先权高者优先服务(非抢占式): \n");
	for (i = 1; i <= num; i++)
	{
		int index = findNextHPF(jobs, num, finish);
		print_1(index, jobs[index].reach_time, jobs[index].need_time);
		sleep(1); //模拟调度（睡眠一秒）。

		// 该作业抵达时间 小于等于 前面求出的最短作业抵达时间。
		if (jobs[index].reach_time <= finish)
		{
			// 该作业的等待时间 = 前面求出的最短作业抵达时间 - 该作业抵达时间。
			jobs[index].wait_time = finish - jobs[index].reach_time;
			// 该作业的开始时间 = 前面求出的最短作业时间。
			jobs[index].start_time = finish;
		}
		else
		{
			// 该作业的开始时间 = 该作业的抵达时间。
			jobs[index].start_time = jobs[index].reach_time;
			// 代表该作业一来就执行，没有等待。
			jobs[index].wait_time = 0;
		}
		jobs[index].finish_time = jobs[index].start_time + jobs[index].need_time;	// 作业完成时间 = 作业开始时间 + 作业执行时间。
		jobs[index].tr_time = jobs[index].finish_time - jobs[index].reach_time;		// 周转时间 = 结束时间 - 抵达时间。
		jobs[index].wtr_time = (double)jobs[index].tr_time / jobs[index].need_time; // 带权周转时间 = 周转时间 / 执行时间。
		jobs[index].visited = true;													// 将该作业的访问标志改为 true。
		sum1 += jobs[index].wait_time;												// 总的等待时间。
		sum2 += jobs[index].tr_time;												// 总的周转时间。
		sum3 += jobs[index].wtr_time;												// 总的带权周转时间。
		finish = jobs[index].finish_time;											// 将该作业的结束时间赋值给 finish。
		print_2(jobs[index].wait_time, jobs[index].tr_time, jobs[index].wtr_time);
	}
	print_3(sum1 / num, sum2 / num, sum3 / num);
	initial_jobs_again(); // 对作业完成时间、响应比、周转时间、带权周转时间进行初始化，将作业是否被访问过设置为 false。
}
