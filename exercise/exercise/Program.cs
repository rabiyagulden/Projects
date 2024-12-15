// See https://aka.ms/new-console-template for more information


class Program
{





public static int diffMinMaxElement(int[] arr)
{
    int max = arr[0];
    int min = max;

    for (int i = 0; i < arr.Length; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
         
        }
        if(arr[i] < min)
            {
                min = arr[i];
            }
    }

    return max-min;
}

//static void Main(string[] args)
//{
//        Console.WriteLine("Hello, World!");
//    int[] arr1 = { 1, 3, 7, 21, 2, 4 };
//    int[] arr2 = { 8,9,23 };
//    Console.WriteLine(diffMinMaxElement(arr1));
//    Console.WriteLine(diffMinMaxElement(arr2));
//}



}

