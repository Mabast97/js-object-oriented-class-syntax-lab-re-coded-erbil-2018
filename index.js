class BoardMember 
{
  constructor(name, homeState, training)
  {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  veto() { return "No, I must disagree"; }
  approve() { return "You can do that!"; }
  doCharity() { return "I like to help people."; }
  releasePressStatement() { return "You will see great things from Scuber."; }
  
  
}

class Ceo 
{
  constructor(name, training, homeState)
  {
    this.name = name;
    this.training = training;
    this.homeState = homeState;
  }
}