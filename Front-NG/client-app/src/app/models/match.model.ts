export class Match {
  constructor(
    public matchId: number,
    public tournament: string,
    public localTeam: string,
    public visitorTeam: string,
    public localTeamScore: number,
    public visitorTeamScore: number,
    public matchDate: Date,
    public finished: boolean
  ) {}
}
