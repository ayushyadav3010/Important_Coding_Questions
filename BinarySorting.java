// { Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.io.*;
import java.lang.*;

public class BinarySorting {
    public static void main(String args[])
    {   //Solution obj=new Solution();
        int A[]={1,0,1,1,0,0,0,1};
        int N=8;
        int j =-1;
        int i;
        for( i=0;i<N;i++)
        {
             if(A[i]<1)
            {  
                j++;
                int temp=A[j];
                A[j]=A[i];
                A[i]=temp;
            }
        }
      for(i=0;i<N;i++)
      {
        System.out.print(A[i]);
      }
    }
}




