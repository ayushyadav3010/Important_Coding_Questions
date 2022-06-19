public class TriangleP2 {
    public static void main(String[] args)
    {
        int i,j,row=10;
        for(i=0;i<row;i++)
        {
            for(j=row-i;j>=0;j--)
            {
                System.out.print(" ");
            }
            for(j=0;j<=i;j++)
            {
                System.out.print(i);
            }
            System.out.println(" ");
        }
       
    }
    
}
