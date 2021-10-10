import java.io.*;
import java.util.*;

public class Parse {
    public static void main(String[] args) throws Exception {
        File file = new File("../data/dataset.csv");
        Scanner in = new Scanner(file);
        PrintWriter out = new PrintWriter("../data/output.txt");

        while (in.hasNextLine()) {
            String ln = in.nextLine();
            int idx = ln.lastIndexOf(",");
            out.write("[[" + ln.substring(0, idx) + "], [\""
                    + (ln.substring(idx+1).equals("1") ? "legitimate" : "phishing")
                    + "\"]],\n");
            out.flush();
        }
    }
}