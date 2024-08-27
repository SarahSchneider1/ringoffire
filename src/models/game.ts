export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }
        this.shuffle(this.stack);
    }

    // Hier ist die Typdeklaration für den stack Parameter
    shuffle(stack: string[]): string[] {
        let currentIndex = stack.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [stack[currentIndex], stack[randomIndex]] = [
            stack[randomIndex], stack[currentIndex]];
        }

        return stack;
    }
}