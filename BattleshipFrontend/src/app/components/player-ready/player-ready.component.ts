import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { PlayerFrontendGame } from '../../models/models';

window.addEventListener('beforeunload', (event) => {
  event.returnValue = 'Are you sure you want to leave?';
});

@Component({
  selector: 'app-player-ready',
  templateUrl: './player-ready.component.html',
  styleUrls: ['./player-ready.component.scss'],
})
export class PlayerReadyComponent {
  public players;
  public playersData: PlayerFrontendGame[] = [];
  public currentPlayer!: PlayerFrontendGame;
  public currentIndex;

  
  constructor(private playerService: PlayerService, private router: Router) {
    this.players = this.playerService.getGamePlayers();
    this.currentIndex = this.playerService.getCurrentIndex();
  }


  ngOnInit() {
    if (this.playerService.getPlayersData()[0] === undefined) {
      this.preparePlayers();
      this.playerService.setPlayersData(this.playersData);
    } else {
      this.playersData = this.playerService.getPlayersData();
    }
    this.currentPlayer = this.playersData[this.currentIndex];
    this.playerService.setCurrentPlayer(this.currentPlayer);
  }


  private preparePlayers(): void {
    this.players.forEach((player) => {
      this.playersData.push({
        id: player.id,
        name: player.name,
        team: player.team,
        isPlaying: true,
      });
    });
  }


  play(): void {
    this.router.navigate(['/game']);
  }
}
