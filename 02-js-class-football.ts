class Team{
 name:string;
 player:string[]
 constructor(name:string,player:string[]){
    this.name=name
    this.player=[]
    

    
 }
 addPlayer(Player:string){
    this.player.push(Player)
    
 }
 listPlayers(): string[] {
    return this.player;
  }
}