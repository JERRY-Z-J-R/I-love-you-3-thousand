#include <stdio.h>

void initializeList(int list[], int number);                                           //初始化队列
void showList(int list[], int number);                                                 //展示队列状态
void showMemoryList(int list[], int phyBlockNum);                                      //展示当前内存状态
void informationCount(int missingCount, int replaceCount, int pageNum);                //消息提示
int getNextPosition(int currentPage, int currentPosition, int strList[], int pageNum); //找到该页面下次要访问的位置
void replacePageByOPT(int memoryList[], int phyNum, int strList[], int pageNum);       //最佳置换算法（周吉瑞） 
void replacePageByFIFO(int memoryList[], int phyNum, int strList[], int pageNum);      //先进先出置换算法（苏爽、杨志颖） 
void replacePageByLRU(int memoryList[], int phyNum, int strList[], int pageNum);       //最近最久未使用置换算法（高淑杰、毛春燕） 

int main()
{
    //物理块数量
    int phyBlockNum;
    printf("----------------------------------------------\n");
    printf("----------------页面置换算法------------------\n");
    printf("----------------------------------------------\n");
    printf("请输入物理块数量：");
    scanf("%d", &phyBlockNum);

    //定义内存队列
    int memoryList[phyBlockNum];
    
    //初始化内存状态
    //先将 memoryList[] 全部赋值为 -1 
    initializeList(memoryList, phyBlockNum);

    //页面数量
    int pageNum;
    
    printf("请输入要访问的页面总数：");
    scanf("%d", &pageNum);

    //保存页面号引用串
    int pageNumStrList[pageNum];
    
    // 请输入要访问的页面
    printf("请输入要访问的页面号：");
    for (int i = 0; i < pageNum; i++)
    {
        scanf("%d", &pageNumStrList[i]);
    }

    int chose;
    while (1)
    {
    	printf("----------------------------------------------\n");
        printf("请选择所需的置换算法:\n");
        printf("1.OPT 最佳置换算法\n2.FIFO 先进先出置换算法\n3.LRU 最近最久未使用置换算法\n4.退出\n");
        printf("----------------------------------------------\n");
        printf("请输入一个编号：");
        scanf("%d", &chose);

        switch (chose)
        {
        case 1:
        	// 展示队列状态
            showList(pageNumStrList, pageNum);
            //最佳置换算法：memoryList内存队列,phyBlockNum物理块数量,pageNumStrList页面号引用串,pageNum页面数量
            replacePageByOPT(memoryList, phyBlockNum, pageNumStrList, pageNum);
            //重新初始化内存
            initializeList(memoryList, phyBlockNum);
            break;
        case 2:
        	// 展示队列状态
            showList(pageNumStrList, pageNum);
            //先进先出置换算法：memoryList内存队列,phyBlockNum物理块数量,pageNumStrList页面号引用串,pageNum页面数量
            replacePageByFIFO(memoryList, phyBlockNum, pageNumStrList, pageNum);
            //重新初始化内存
            initializeList(memoryList, phyBlockNum);
            break;
        case 3:
        	// 展示队列状态
            showList(pageNumStrList, pageNum);
            //最近最久未使用置换算法：memoryList内存队列,phyBlockNum物理块数量,pageNumStrList页面号引用串,pageNum页面数量
            replacePageByLRU(memoryList, phyBlockNum, pageNumStrList, pageNum);
            //重新初始化内存
            initializeList(memoryList, phyBlockNum);
            break;
        default:
            return 0;
            break;
        }
    }

    return 0;
}

//初始化内存队列
void initializeList(int list[], int number)
{
    for (int i = 0; i < number; i++)
    {
    	// 全部赋值为 -1 
        list[i] = -1;
    }
}

//展示队列
void showList(int list[], int number)
{
    for (int i = 0; i < number; i++)
    {
        printf("%2d", list[i]);
    }
    printf("\n");
}

//展示当前内存状态
void showMemoryList(int list[], int phyBlockNum)
{
    for (int i = 0; i < phyBlockNum; i++)
    {
        if (list[i] == -1)
        {
            break;
        }
        printf("  【%d】 ", list[i]);
    }
    printf("\n");
}

//消息提示
void informationCount(int missingCount, int replaceCount, int pageNum)
{
    printf("缺页次数:%d\t缺页率:%d/%d\n", missingCount, missingCount, pageNum);
    double result = (double)(pageNum - missingCount) / (double)pageNum;
    printf("置换次数:%d\t命中率:%.2f\n", replaceCount, result);
}

//找到该页面下次要访问的位置
int getNextPosition(int currentPage, int currentPosition, int strList[], int pageNum)
{

    for (int i = currentPosition + 1; i < pageNum; i++)
    {
        if (strList[i] == currentPage)
        {
            return i;
        }
    }

    return 100;
}

//最佳置换算法
void replacePageByOPT(int memoryList[], int phyNum, int strList[], int pageNum)
{
    //置换次数
    int replaceCount = 0;
    //缺页次数
    int missingCount = 0;
    //记录在内存的物理块的下一次访问位置
    int nextPosition[phyNum];
    
    //初始化
    initializeList(nextPosition, phyNum);

    //记录当前页面的访问情况: 0 未访问
    int isVisited;

    for (int i = 0; i < pageNum; i++)
    {
        isVisited = 0;
        //判断是否需要置换：如果内存已满且需要访问的页面不在内存中，那么便需要置换 
        for (int j = 0; j < phyNum; j++)
        {
        	//如果该页面已经存在内存中
            if (memoryList[j] == strList[i])
            {
                //记录下一次访问它的位置
                nextPosition[j] = getNextPosition(memoryList[j], i, strList, pageNum);

                //修改访问情况
                isVisited = 1;

                //展示
                printf("%d：  【页面已经存在内容中】\n", strList[i]);
                break;
            }
            //页面不在内存中且内存未满
            if (memoryList[j] == -1)
            {
                //直接存入
                memoryList[j] = strList[i];
                //记录下一次访问它的位置
                nextPosition[j] = getNextPosition(memoryList[j], i, strList, pageNum);

				//缺页次数 + 1 
                missingCount++;

                //修改访问情况
                isVisited = 1;

                //展示
                printf("%d：", strList[i]);
                showMemoryList(memoryList, phyNum);
                break;
            }
        }

        //当前页面还没访问过
        if (!isVisited)
        {
            //内存已满且当前访问不在内存中->进行置换
            //1.寻找到最晚才被访问到的页面
            int max = 0;
            for (int k = 1; k < phyNum; k++)
            {
                if (nextPosition[max] < nextPosition[k])
                {
                    max = k;
                }
            }

            //2.将该位置的页面换出
            memoryList[max] = strList[i];
            //记录下一次访问它的位置
            nextPosition[max] = getNextPosition(memoryList[max], i, strList, pageNum);

            missingCount++;
            replaceCount++;

            //展示
            printf("%d：", strList[i]);
            showMemoryList(memoryList, phyNum);
        }
    }
    //消息提示
    informationCount(missingCount, replaceCount, pageNum);
}

//先进先出置换算法
void replacePageByFIFO(int memoryList[], int phyNum, int strList[], int pageNum)
{
    //置换次数
    int replaceCount = 0;
    //缺页次数
    int missingCount = 0;

    //记录当前最早进入内存的下标
    int pointer = 0;

    //记录当前页面的访问情况: 0 未访问
    int isVisited = 0;
    
    for (int i = 0; i < pageNum; i++)
    {
        isVisited = 0;

        //判断是否需要置换：如果内存已满且需要访问的页面不在内存中，那么便需要置换
        for (int j = 0; j < phyNum; j++)
        {
        	//该页面已经存在内存中
            if (memoryList[j] == strList[i])
            {
                //修改访问情况
                isVisited = 1;
                //修改访问时间
                //展示
                printf("%d：  【页面已经存在内容中】\n", strList[i]);
                break;
            }
            //页面不在内存中且内存未满
            if (memoryList[j] == -1)
            {
                //直接存入
                memoryList[j] = strList[i];
                //修改访问情况
                isVisited = 1;
                missingCount++;
                //展示
                printf("%d：", strList[i]);
                showMemoryList(memoryList, phyNum);
                break;
            }
        }

        if (!isVisited)
        {
            //当前页面还未被访问过->需要进行页面置换
            //直接把这个页面存到所记录的下标中
            memoryList[pointer] = strList[i];

            //下标指向下一个
            pointer++;

            //如果到了最后一个，将下标归零
            if (pointer > phyNum - 1)
            {
                pointer = 0;
            }

            missingCount++;
            replaceCount++;

            //展示
            printf("%d：", strList[i]);
            showMemoryList(memoryList, phyNum);
        }
    }
    informationCount(missingCount, replaceCount, pageNum);
}

//最近最久未使用置换算法
void replacePageByLRU(int memoryList[], int phyNum, int strList[], int pageNum)
{

    //置换次数
    int replaceCount = 0;
    //缺页次数
    int missingCount = 0;

    //记录内存中最近一次访问至今的时间
    int timeRecord[phyNum];
    
    //初始化
    initializeList(timeRecord, phyNum);

    //记录当前页面的访问情况: 0 未访问
    int isVisited = 0;

    //记录已经在内存中的页面数量
    int pageCount = 0;
    
    for (int i = 0; i < pageNum; i++)
    {
        isVisited = 0;

        //时间加一
        for (int p = 0; p < pageCount; p++)
        {
            if (memoryList[p] != -1)
            {
                timeRecord[p]++;
            }
        }

        //是否需要置换
        for (int j = 0; j < phyNum; j++)
        {
            if (memoryList[j] == strList[i])
            {
                //该页面已经存在内存中
                //修改访问情况
                isVisited = 1;
                //重置访问时间
                timeRecord[j] = -1;
                //展示
                printf("%d：  【页面已经存在内容中】\n", strList[i]);
                break;
            }
            //页面不在内存中且内存未满
            if (memoryList[j] == -1)
            {
                //直接存入
                memoryList[j] = strList[i];
                pageCount++;
                //修改访问情况
                isVisited = 1;
                //修改访问时间
                timeRecord[j]++;
                missingCount++;
                //展示
                printf("%d：", strList[i]);
                showMemoryList(memoryList, phyNum);
                break;
            }
        }

        if (!isVisited)
        {
            //需要置换
            //1.遍历时间记录表，寻找最久未访问的页面所在的内存下标
            int max = 0;
            for (int k = 0; k < phyNum; k++)
            {
                if (timeRecord[max] < timeRecord[k])
                {
                    max = k;
                }
            }

            //2.将该位置的页面换出
            memoryList[max] = strList[i];
            timeRecord[max] = -1;

            missingCount++;
            replaceCount++;

            //展示
            printf("%d：", strList[i]);
            showMemoryList(memoryList, phyNum);
        }
    }
    informationCount(missingCount, replaceCount, pageNum);
}

/*
----------------------------------------------
----------------页面置换算法------------------
----------------------------------------------
请输入物理块数量：3
请输入要访问的页面总数：11
请输入要访问的页面号：7 0 1 2 0 3 0 4 2 7 1
----------------------------------------------
请选择所需的置换算法:
1.OPT 最佳置换算法
2.FIFO 先进先出置换算法
3.LRU 最近最久未使用置换算法
4.退出
----------------------------------------------
请输入一个编号：1
 7 0 1 2 0 3 0 4 2 7 1
7：  【7】
0：  【7】   【0】
1：  【7】   【0】   【1】
2：  【7】   【0】   【2】
0：  【页面已经存在内容中】
3：  【3】   【0】   【2】
0：  【页面已经存在内容中】
4：  【4】   【0】   【2】
2：  【页面已经存在内容中】
7：  【7】   【0】   【2】
1：  【1】   【0】   【2】
缺页次数:8      缺页率:8/11
置换次数:5      命中率:0.27
----------------------------------------------
请选择所需的置换算法:
1.OPT 最佳置换算法
2.FIFO 先进先出置换算法
3.LRU 最近最久未使用置换算法
4.退出
----------------------------------------------
请输入一个编号：2
 7 0 1 2 0 3 0 4 2 7 1
7：  【7】
0：  【7】   【0】
1：  【7】   【0】   【1】
2：  【2】   【0】   【1】
0：  【页面已经存在内容中】
3：  【2】   【3】   【1】
0：  【2】   【3】   【0】
4：  【4】   【3】   【0】
2：  【4】   【2】   【0】
7：  【4】   【2】   【7】
1：  【1】   【2】   【7】
缺页次数:10     缺页率:10/11
置换次数:7      命中率:0.09
----------------------------------------------
请选择所需的置换算法:
1.OPT 最佳置换算法
2.FIFO 先进先出置换算法
3.LRU 最近最久未使用置换算法
4.退出
----------------------------------------------
请输入一个编号：3
 7 0 1 2 0 3 0 4 2 7 1
7：  【7】
0：  【7】   【0】
1：  【7】   【0】   【1】
2：  【2】   【0】   【1】
0：  【页面已经存在内容中】
3：  【2】   【0】   【3】
0：  【页面已经存在内容中】
4：  【4】   【0】   【3】
2：  【4】   【0】   【2】
7：  【4】   【7】   【2】
1：  【1】   【7】   【2】
缺页次数:9      缺页率:9/11
置换次数:6      命中率:0.18
----------------------------------------------
请选择所需的置换算法:
1.OPT 最佳置换算法
2.FIFO 先进先出置换算法
3.LRU 最近最久未使用置换算法
4.退出
----------------------------------------------
请输入一个编号：4

--------------------------------
Process exited after 29.08 seconds with return value 0
请按任意键继续. . .
*/
