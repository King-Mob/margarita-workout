'use strict';

const e = React.createElement;

const exerciseArray = [
    {
		title:"Groiners",
		url: "https://www.youtube.com//embed/xCQsC5lYFnI"
	},
	{
		title:"Hip Mobility Set",
		url: "https://www.youtube.com//embed/7bAENjQWSgI"
	},
	{
		title:"Iron Cross",
		url: "https://www.youtube.com//embed/mJSkpCMah7M"
	},
	{
		title:"Lower Body Crawl",
		url: "https://www.youtube.com//embed/-TLAZK-uDns"
	},
	{
		title:"Hamstring Mobility",
		url: "https://www.youtube.com//embed/xUa-CTe8KOc"
	},
	{
        title: "Straight Arm Pullover",
        url: "https://www.youtube.com/embed/sSHj4i2LXvQ",
    },
	{
		title:"Figure 4 Kickback",
		url: "https://www.youtube.com//embed/j7cYOnEtlO8"
	},
    {
        title: "Supine Plank",
        url: "https://www.youtube.com//embed/wByQ0ClDtUc"
    },
    {
        title: "Walkdowns",
        url: "https://www.youtube.com//embed/CXXTGlqsI00"
    },
	{
		title:"Single Leg Calf Raises",
		url: "https://www.youtube.com//embed/lOZp-smfqnQ"
	},
	{
		title:"Swiss Ball Pike",
		url: "https://www.youtube.com//embed/4lRfId3xW3w"
	},
	{
		title:"Toe Touches",
		url: "https://www.youtube.com//embed/K32_LOVovNA"
	},
	{
		title:"Side Plank With Rotation",
		url: "https://www.youtube.com//embed/1tS15FCNaTM"
	},
	{
		title:"Plank With Wall Touch",
		url: "https://www.youtube.com//embed/fHyxDo4NRBc"
	},
	{
		title:"V-ups",
		url: "https://www.youtube.com//embed/2AHpYIV_pHY"
	},
	{
		title:"Plank With Reach Out",
		url: "https://www.youtube.com//embed/QcTxLzbzerU"
	},
	{
		title:"Get Ups",
		url: "https://www.youtube.com//embed/pGQNW5i2NsM"
	},
	{
		title:"Superman",
		url: "https://www.youtube.com//embed/vR2c7t7qOVg"
	},
	{
		title:"Ball Knee Tucks",
		url: "https://www.youtube.com//embed/oZ7KVw1of6A"
	},
	{
		title:"Ball Toe Taps",
		url: "https://www.youtube.com//embed/45CoFBZuA-I"
	},
	{
		title:"Mountain Climbers",
		url: "https://www.youtube.com//embed/29MEOyVWnww"
	},
	{
		title:"Mountain Climbers With Knee Push Ups",
		url: "https://www.youtube.com//embed/aMuJfSfT3w4"
	},
	{
		title:"Clams",
		url: "https://www.youtube.com//embed/wphtSSWXKIU"
	},
	{
		title:"Monster Walk",
		url: "https://www.youtube.com//embed/vYXRn_v9uN8"
	},
	{
		title:"Bridge",
		url: "https://www.youtube.com//embed/6KzEUm2uf2U"
	},
	{
		title:"Ball Bridge",
		url: "https://www.youtube.com//embed/SMjVlTGG4TI"
	},
	{
		title:"Bridge With Single Leg Balance",
		url: "https://www.youtube.com//embed/pv3K1ww_qlg"
	},
	{
		title:"Ball Bridge With Roll Out",
		url: "https://www.youtube.com//embed/QpZ758IVVzc"
	},
	{
		title:"Static Lunge",
		url: "https://www.youtube.com//embed/wVhJkWJCPh0"
	},
	{
		title:"Pass Under Lunge",
		url: "https://www.youtube.com//embed/oGivf4nIyS0"
	},
	{
		title:"Front/Back Lunge",
		url: "https://www.youtube.com//embed/hd0UlSw8yyQ"
	},
	{
		title:"Lunge With High Knee Jump",
		url: "https://www.youtube.com//embed/aj4qb4z1xkQ"
	},
	{
		title:"Jumping Lunges",
		url: "https://www.youtube.com//embed/nCmy_RtSG-Y"
	},
	{
		title:"Jumping Squats",
		url: "https://www.youtube.com//embed/BqBFs41NInY"
	},
	{
		title:"Ski/Sumo Jumping Squats",
		url: "https://www.youtube.com//embed/OzkNWQWKO-M"
	},
	{
		title:"Single Leg Squat",
		url: "https://www.youtube.com//embed/vyReZyLi6SU"
	},
	{
		title:"Surrenders",
		url: "https://www.youtube.com//embed/j-RAG580jFs"
	},
	{
		title:"Kettlebell Swings",
		url: "https://www.youtube.com//embed/MaYO2c5qT6g"
	},
	{
		title:"Deadlift",
		url: "https://www.youtube.com//embed/YuY0EQR8khc"
	},
	{
		title:"Single Deadlift",
		url: "https://www.youtube.com//embed/0v4o8LDansQ"
	},
	{
		title:"Front and Lateral Raises",
		url: "https://www.youtube.com//embed/zsk_rko6e9I"
	},
	{
		title:"Ball Fly",
		url: "https://www.youtube.com//embed/ylurrWvfvv4"
	},
	{
		title:"Lunge With Step Up",
		url: "https://www.youtube.com//embed/DAMbsWK-fqo"
	},
	{
		title:"TRX Crunches and Side Crunches",
		url: "https://www.youtube.com//embed/bAEptkXPdik"
	},
	{
		title:"Tricep Push Up",
		url: "https://www.youtube.com//embed/hrhpe4KILWQ"
	},
	{
		title:"Windshield Wiper",
		url: "https://www.youtube.com//embed/oDFWabUxTic"
	},
	{
		title:"Plank With Hip Dip",
		url: "https://www.youtube.com//embed/bdacIRVZPJQ"
	},
	{
		title:"Hot Lizard",
		url: "https://www.youtube.com//embed/ajZibWvU-nU"
	},
	{
		title:"Low Deep Lunge",
		url: "https://www.youtube.com//embed/ANTgmViEYwo"
	},
	{
		title:"Up/Down Planks",
		url: "https://www.youtube.com//embed/hLkKlSE0h8c"
	},
	{
		title:"Surrenders With Angled Front Lunges",
		url: "https://www.youtube.com//embed/gHZZmyRr6vo"
	},
	{
		title:"Mountain Climbers With Tricep Push Ups",
		url: "https://www.youtube.com//embed/Cr616cw-5Ys"
	},
]

class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { generated: false };

    this.generateWorkout = this.generateWorkout.bind(this);
  }

  generateWorkout(){
    let random3Numbers = [];

    while(random3Numbers.length<3){
        let potentialEntry = Math.floor(Math.random()*52);
        if(!random3Numbers.includes(potentialEntry))
            random3Numbers.push(potentialEntry);
    }

    this.setState({
        generated: true,
        video1: exerciseArray[random3Numbers[0]],
        video2: exerciseArray[random3Numbers[1]],
        video3: exerciseArray[random3Numbers[2]],
    });
  }

  render() {
    if (this.state.generated) {
      return <div>
          <div className="top-container">
          <h1>Margarita Workout</h1>
          <div className="button" onClick={this.generateWorkout}>
            <p>
              Generate Workout
            </p>
          </div>
            
          </div>
            <div className="video-container">
                <iframe id="Frame" width="500" height="315" src={this.state.video1.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe id="Frame" width="500" height="315" src={this.state.video2.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe id="Frame" width="500" height="315" src={this.state.video3.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
           </div>
      ;
    }

    return <div>
        <div className="top-container">
          <h1>Margarita Workout</h1>
          <div className="button" onClick={this.generateWorkout}>
          <p>
              Generate Workout
            </p>
          </div>
          </div>
    </div>
    ;
  }
}

const domContainer = document.querySelector('#workout_container');
ReactDOM.render(e(Workout), domContainer);