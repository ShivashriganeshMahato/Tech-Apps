import netgame.client.Client;

import java.awt.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class MyAIClientListener extends AIClientListener {
    private Node root;

    public MyAIClientListener() {
        super("Jay's AI");
    }
    
//    public void findNearestQueen(AmazonsRules r, int row, int col) {
//        boolean[][] checked = new boolean[10][10];
//        checked[row][col] = true;
//        boolean isFound = false;
//
//        Queue<Point> queenQueue = new LinkedList<>();
//        // All moves a queen could make to reach this Point
//        queenQueue = addQueenMoves(queenQueue, row, col, checked);
//        while (!isFound) {
//            Queue<Point> tempQ = new LinkedList<>();
//            int index = queenQueue.size();
//            // No valid moves, Point blocked in
//            if (index == 0) {
//                break;
//            }
//            // Check every move possible from current Point
//            for (int i = 0; i < index; i++) {
//                Point currentPoint = queenQueue.poll();
//
//                // Current Point has queen here
//                if ((r.getState().getObjectAt(currentPoint.x, currentPoint.y) != null) && ((board[currentPoint.row][currentPoint.col] instanceof Queen))) {
//                    isFound = true;
//                    boolean enemyQueen = ((Queen) board[currentPoint.row][currentPoint.col]).isOpponent;
//                    boolean contested = false;
//
//                    // If queen found in q, queen is 1 move away, checks if opposing queens 1 move away
//                    for (Point shell : queenQueue) {
//                        // Opposing queen found 1 move away, Point contested
//                        if ((board[shell.row][shell.col] != null) && (board[shell.row][shell.col] instanceof Queen) && !(((Queen) board[shell.row][shell.col]).isOpponent == enemyQueen))
//                            contested = true;
//                    }
//                    // Owned by no one
//                    if (contested) {
//                        break;
//                    }
//                    if (((Queen) board[currentPoint.row][currentPoint.col]).isOpponent) {
//                        ownedByThem++;
//                    } else {
//                        ownedByUs++;
//                    }
//                    break;
//                } else {
//                    checked[currentPoint.row][currentPoint.col] = true;
//                }
//
//                // Point has no arrow or queen
//                if (board[currentPoint.row][currentPoint.col] == null) {
//                    tempQ = addQueenMoves(tempQ, currentPoint.row, currentPoint.col, checked);
//                }
//            }
//            queenQueue = tempQ;
//        }
//    }
//
//    public Queue<Point> addQueenMoves(Queue<Point> q, int curRow, int curCol, boolean[][] checked) {
//        for (int i = 1; curCol - i >= 0; i++) {
//            Point lData = new Point(curRow, curCol - i);
//            if (checked[curRow][(curCol - i)] == false) {
//                q.add(lData);
//            }
//            if (board[curRow][(curCol - i)] != null) {
//                break;
//            }
//        }
//
//        for (int i = 1; (curRow - i >= 0) && (curCol - i >= 0); i++) {
//            Point lData = new Point(curRow - i, curCol - i);
//            if (checked[(curRow - i)][(curCol - i)] == false) {
//                q.add(lData);
//            }
//            if (board[(curRow - i)][(curCol - i)] != null) {
//                break;
//            }
//        }
//
//        for (int i = 1; curRow - i >= 0; i++) {
//            Point lData = new Point(curRow - i, curCol);
//            if (checked[(curRow - i)][curCol] == false) {
//                q.add(lData);
//            }
//            if (board[(curRow - i)][curCol] != null) {
//                break;
//            }
//        }
//
//        for (int i = 1; (curRow - i >= 0) && (curCol + i <= 9); i++) {
//            Point lData = new Point(curRow - i, curCol + i);
//            if (checked[(curRow - i)][(curCol + i)] == false) {
//                q.add(lData);
//            }
//            if (board[(curRow - i)][(curCol + i)] != null) {
//                break;
//            }
//        }
//
//        for (int i = 1; curCol + i <= 9; i++) {
//            Point lData = new Point(curRow, curCol + i);
//            if (checked[curRow][(curCol + i)] == false) {
//                q.add(lData);
//            }
//            if (board[curRow][(curCol + i)] != null) {
//                break;
//            }
//        }
//
//        for (int i = 1; (curRow + i <= 9) && (curCol + i <= 9); i++) {
//            Point lData = new Point(curRow + i, curCol + i);
//            if (checked[(curRow + i)][(curCol + i)] == false) {
//                q.add(lData);
//            }
//            if (board[(curRow + i)][(curCol + i)] != null) {
//                break;
//            }
//        }
//
//        for (int i = 1; curRow + i <= 9; i++) {
//            Point lData = new Point(curRow + i, curCol);
//            if (checked[(curRow + i)][curCol] == false) {
//                q.add(lData);
//            }
//            if (board[(curRow + i)][curCol] != null) {
//                break;
//            }
//        }
//
//        for (int i = 1; (curRow + i <= 9) && (curCol - i >= 0); i++) {
//            Point lData = new Point(curRow + i, curCol - i);
//            if (checked[(curRow + i)][(curCol - i)] == false) {
//                q.add(lData);
//            }
//            if (board[(curRow + i)][(curCol - i)] != null) {
//                break;
//            }
//        }
//        return q;
//    }

    public double getDist(int ax, int ay, Point b) {
        return Math.sqrt(Math.pow(ax - b.x, 2) + Math.pow(ay - b.y, 2));
    }

    public int scoreMove(AmazonsRules rules) {
        int score = 0;

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                if (rules.getState().getObjectAt(i, j) == 0) {
                    double minDist = Double.MAX_VALUE;
                    boolean isOurs = false;

                    for (Point amazon : rules.getState().getPieces(this.getMyPlayerNumber())) {
                        double dist = getDist(i, j, amazon);
                        if (dist < minDist) {
                            minDist = dist;
                            isOurs = true;
                        }
                    }
                    for (Point amazon : rules.getState().getPieces(this.getOtherPlayerNumber())) {
                        double dist = getDist(i, j, amazon);
                        if (dist < minDist) {
                            minDist = dist;
                            isOurs = false;
                        }
                    }

                    if (isOurs) {
                        score++;
                    } else {
                        score--;
                    }
                }
            }
        }

        return score;
    }

    @Override
    public void yourTurn(AmazonsRules rules, Client<AmazonsState, AmazonsRules> client) {
        AmazonsState state = rules.getState();

        int score = 0;
        String move = null;
        List<String> moves = new ArrayList<>();

        for (Point piece : state.getPieces(this.getMyPlayerNumber())) {
            if (null == piece) {
                System.out.println("Missing piece...");
                continue;
            }
            int fromX = piece.x;
            int fromY = piece.y;

            for (int toX = 0; toX < 10; toX++) {
                for (int toY = 0; toY < 10; toY++) {
                    for (int shootX = 0; shootX < 10; shootX++) {
                        for (int shootY = 0; shootY < 10; shootY++) {
                            if (rules.canMove(fromX, fromY, toX, toY, shootX, shootY)) {
                                String thisMove = fromX + C.SPACE + fromY + C.SPACE + toX + C.SPACE + toY + C.SPACE + shootX + C.SPACE + shootY;
                                moves.add(thisMove);

                                AmazonsRules temp = rules.getCopy();
                                temp.move(fromX, fromY, toX, toY, shootX, shootY);
                                int moveScore = scoreMove(temp);
                                if (moveScore > score) {
                                    score = moveScore;
                                    move = thisMove;
                                }
                            }
                        }
                    }
                }
            }
        }

//        if (root == null) {
//            root = new Node(rules, this.getMyPlayerNumber());
//            root.populateChildren(1, 1);
//            root.scoreTree(root);
//        }
//
//        int max = 0;
//        String move = null;
//
//        System.out.println(root.getChildren());
//        for (Node child : root.getChildren()) {
//
//            if (child.getScore() > max) {
//                max = child.getScore();
//                move = child.getMove();
//            }
//        }

        if (move == null) {
            //pick a random move
            Collections.shuffle(moves);
            client.send(C.MOVE + C.SPACE + moves.get(0));
        } else {
            client.send(C.MOVE + C.SPACE + move);
        }
    }

    @Override
    public void gameover(String reason) {

    }
}




