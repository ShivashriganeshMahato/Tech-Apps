import java.awt.*;
import java.util.ArrayList;

/**
 * @author Shivashriganesh Mahato
 */
public class Node {
    private AmazonsRules rules;
    private AmazonsState state;
    private int pNum;
    private ArrayList<Node> children;
    private int score;
    private String move;

    public Node(AmazonsRules rules, int pNum) {
        this.rules = rules;
        this.state = rules.getState();
        this.pNum = pNum;
        this.children = new ArrayList<>();
        this.score = 0;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getMove() {
        return move;
    }

    public void setMove(String move) {
        this.move = move;
    }

    public Node validAddChild(int fromX, int fromY, int toX, int toY, int shootX, int shootY) {
        if (rules.canMove(fromX, fromY, toX, toY, shootX, shootY)) {
            AmazonsRules temp = this.rules.getCopy();
            temp.move(fromX, fromY, toX, toY, shootX, shootY);
            Node child = new Node(temp, pNum);
            child.setMove(fromX + C.SPACE + fromY + C.SPACE + toX + C.SPACE + toY + C.SPACE + shootX + C.SPACE + shootY);
            children.add(child);
            return child;
        }
        return null;
    }

    public void populateChildren(int depth, int max_depth) {
        if (depth > max_depth) {
            return;
        }

        for (Point piece : state.getPieces(pNum)) {
            if (piece == null) {
                System.out.println("Missing piece...");
                continue;
            }

            int fromX = piece.x;
            int fromY = piece.y;

//            for (int toX = 0; toX < 10; toX++) {
//                for (int shootX = 0; shootX < 10; shootX++) {
//                    validAddChild(fromX, fromY, toX, fromY, shootX, fromY);
//                }
//                for (int shootY = 0; shootY < 10; shootY++) {
//                    validAddChild(fromX, fromY, toX, fromY, toX, shootY);
//                }
//                for (int x = 0; x < 10; x++) {
//                    validAddChild(fromX, fromY, toX, fromY, toX, shootY);
//                }
//            }


            for (int toX = 0; toX < 10; toX++) {
                for (int toY = 0; toY < 10; toY++) {
                    for (int shootX = 0; shootX < 10; shootX++) {
                        for (int shootY = 0; shootY < 10; shootY++) {
                            if (rules.canMove(fromX, fromY, toX, toY, shootX, shootY)) {
                                Node addedChild = validAddChild(fromX, fromY, toX, toY, shootX, shootY);
                                if (addedChild != null) {
                                    populateChildren(depth + 1, max_depth);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    public void scoreTree(Node node) {
        node.setScore(node.children.size());
        System.out.println(node.getScore());
        for (Node child : node.children) {
            scoreTree(child);
        }
    }

    public ArrayList<Node> getChildren() {
        return children;
    }
}
