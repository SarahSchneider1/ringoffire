import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import {FormsModule} from '@angular/forms';
import {
  MatDialog,
 
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GameInfoComponent } from "../game-info/game-info.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, FormsModule,
    MatFormFieldModule,
    MatInputModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
 
  game !:Game;
  pickCardAnimation = false;
  currentCard: string = '';
  constructor(public dialog:MatDialog) {
    this.newGame();
  }



 
  takeCard() {
    if(!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() ||''
      this.pickCardAnimation = true;
      console.log('new card:'+ this.currentCard);
      console.log('game is',this.game);
      
      this.game.currentPlayer++
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
    
    
  }

  newGame() {
    this.game = new Game();
    console.log(this.game)
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent)
    dialogRef.afterClosed().subscribe((name:string) => {
      if(name && name.length > 0) {
      this.game.players.push(name)
    }
    });
  }


 
}
