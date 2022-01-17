#include <stdio.h>

// num：磁道数，sum：寻道长度，kai：起始磁道，max：最长磁道号 
int num, sum, kai, max;
int m = 0;
int n = 0;
int s[100];		// 请求访问序列 
int s1[100];
int c1[50];		// 小于起始磁道序列 
int c2[50];		// 大于等于起始磁道序列 

void MENU(); 	// 菜单 
void creat();	// 创建
void FCFS();	// 先来先服务 FCFS（周吉瑞） 
void SSTF();	// 最短寻道 SSTF （苏爽、杨志颖） 
void SCAN();	// 扫描算法 SCAN（毛春燕、高淑杰） 
void CSCAN();	// 循环扫描算法 CSCAN（周吉瑞） 


int main()
{
    MENU();
    return 0;
}

// 菜单 
void MENU()
{
    printf("**************磁盘调度算法*************\n");
    printf("***************************************\n");
    printf("1.创建磁道\n2.先来先服务 FCFS\n3.最短寻道 SSTF\n4.扫描算法 SCAN\n5.循环扫描算法 CSCAN\n6.退出 EXIT\n");
    printf("***************************************\n");
    printf("请输入编号：");
     
    int menuchoice;
    scanf("%d", &menuchoice);
    
    if (menuchoice != 1 && menuchoice != 6)
    {
        printf("请先创建磁道\n");
    }
    if (menuchoice == 6)
    {
        printf("谢谢使用！");
    }
    else
    {
        creat();
    P: 
        printf("***************************************\n");
        printf("1.先来先服务 FCFS\n2.最短寻道 SSTF\n3.扫描算法 SCAN\n4.循环扫描算法 CSCAN\n5.退出 EXIT\n");
        printf("***************************************\n");
        printf("请输入编号：");
        
        scanf("%d", &menuchoice);
        switch (menuchoice)
        {
        case 1:
            FCFS();
            goto P;
        case 2:
            SSTF();
            goto P;
        case 3:
            SCAN();
            goto P;
        case 4:
            CSCAN();
            goto P;
        case 5:
            printf("谢谢使用！");
            break;
        }
    }
}

// 数据创建初始化 
void creat()
{
    printf("---------------------------------------\n");
    printf("请输入从哪个磁道开始：");
    scanf("%d", &kai);
    printf("---------------------------------------\n");
    printf("请输入最长磁道号：");
    scanf("%d", &max);
    printf("---------------------------------------\n");
    printf("请输入磁道的个数：");
    scanf("%d", &num);
    printf("---------------------------------------\n");

    for (int j = 0; j < num; j++)
    {
        printf("请输入第%d个磁道：", j + 1);
        scanf("%d", &s[j]);
        if (s[j] > max)
        {
            printf("ERROR\n");
            break;
        }
        // 放置重复请求 
        for (int i = 0; i < j; i++)
            if (s[j] == s[i])
                j--;
    }

	//	起始磁道，kai
    int su = kai;
    int t;
    for (int i = 0; i < num; i++)
    	// 如果小于起始磁道 
        if (su > s[i])
            c1[m++] = s[i];
        // 如果大于等于起始磁道 
        else  
            c2[n++] = s[i];
            
    // 对小于起始磁道的部分进行排序 
    for (int i = 0; i < m; i++)
        for (int j = i; j < m; j++)
            if (c1[i] < c1[j])
            {
                t = c1[i];
                c1[i] = c1[j];
                c1[j] = t;
            }
            
    // 对于大于等于起始磁道的部分进行排序 
    for (int i = 0; i < n; i++)
        for (int j = i; j < n; j++)
            if (c2[i] > c2[j])
            {
                t = c2[i];
                c2[i] = c2[j];
                c2[j] = t;
            }
}

// 先来先服务 
void FCFS()
{
    printf("先来先服务 FCFS\n");
    printf("【被访问的下一个磁道】\t【磁道号移动距离】\n");
    int su = kai;
    sum = 0;
    for (int i = 0; i < num; i++)
    {
        if (su < s[i])
            s1[i] = s[i] - su;
        else
            s1[i] = su - s[i];
        su = s[i];
        sum += s1[i];
    }

    for (int i = 0; i < num; i++)
    {
        printf("\t%d\t\t\t%d\n", s[i], s1[i]);
    }
    printf("寻道长度：%d\n", sum);
}

// 最短寻找时间优先
void SSTF()
{
    printf("最短寻道 SSTF:\n");
    printf("【被访问的下一个磁道】\t【磁道号移动距离】\n");
    int su = kai;
    int s2[100];
    sum = 0;

    for (int i = 0; i < m; i++)
        s2[i] = c1[i];
    for (int i = 0; i < n; i++)
        s2[i + m] = c2[i];
        
    for (int i = 0; i < num; i++)
    {
        if (su < s2[i])
            s1[i] = s2[i] - su;
        else
            s1[i] = su - s2[i];
        su = s2[i];
        sum += s1[i];
    }
    for (int i = 0; i < num; i++)
    {
        printf("\t%d\t\t\t%d\t\t\n", s2[i], s1[i]);
    }
    printf("寻道长度:%d\n", sum);
}

// 扫描算法/电梯算法
void SCAN()
{
    printf("扫描算法/电梯算法 SCAN:\n");
    printf("【被访问的下一个磁道】\t【磁道号移动距离】\n");
    int su = kai;
    int s2[100];
    sum = 0;
    
    for (int i = 0; i < n; i++)
        s2[i] = c2[i];
    for (int i = 0; i < m; i++)
        s2[i + n] = c1[i];
        
    for (int i = 0; i < num; i++)
    {
        if (su < s2[i])
            s1[i] = s2[i] - su;
        else
            s1[i] = su - s2[i];
        su = s2[i];
        sum += s1[i];
    }
    for (int i = 0; i < num; i++)
    {
        printf("\t%d\t\t\t%d\t\t\n", s2[i], s1[i]);
    }
    printf("寻道长度：%d\n", sum);
}

// 循环扫描算法 
void CSCAN()
{
    printf("循环扫描 CSCAN:\n");
    printf("【被访问的下一个磁道】\t【磁道号移动距离】\n");
    int su = kai;
    int j = 0;
    int s2[100];
    sum = 0;
    for (int i = 0; i < n; i++)
        s2[i] = c2[i];
    for (int i = m - 1; i >= 0; j++, i--)
        s2[j + n] = c1[i];
    for (int i = 0; i < num; i++)
    {
        if (su < s2[i])
            s1[i] = s2[i] - su;
        else
            s1[i] = su - s2[i];
        su = s2[i];
        sum += s1[i];
    }
    // sum=sum/num;
    for (int i = 0; i < num; i++)
    {
        printf("\t%d\t\t\t%d\t\t\n", s2[i], s1[i]);
    }
    printf("寻道长度:%d\n", sum);
}

