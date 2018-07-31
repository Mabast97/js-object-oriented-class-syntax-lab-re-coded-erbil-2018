class BoardMember 
{
  constructor(name, homeState, training)
  {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
  
  veto() { return "No, I must disagree"; }
  
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