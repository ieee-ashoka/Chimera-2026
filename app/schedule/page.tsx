import Card from "@/components/Card";
import React from "react";

const scheduleData = [
  {
    date: "07-02-2026",
    events: [
      {
        time: "9:00 AM",
        title: "Registration",
        venue: ""
      },
      {
        time: "10:15 AM",
        title: "Opening Ceremony & Panel 1",
        venue: "AC02-007"
      },
      {
        time: "11:15 AM – 1:30 PM",
        title: "Chaos Theory Population Modelling",
        venue: "AC02-013"
      },
      {
        time: "11:15 AM – 1:30 PM",
        title: "Phy Comp (Earthquake Proof Structure Building)",
        venue: "AC02-008 & AC02-009"
      },
      {
        time: "1:30 PM",
        title: "Lunch Break",
        venue: ""
      },
      {
        time: "2:00 PM – 3:30 PM",
        title: "Workshop",
        venue: "AC02-008 & AC02-009"
      },
      {
        time: "3:30 PM – 4:45 PM",
        title: "Talk 1: Prof Sujit",
        venue: "AC02-013"
      },
      {
        time: "5:00 PM – 5:30 PM",
        title: "Phy Comp (Earthquake Proof Structure Building)",
        venue: "AC02-008 & AC02-009"
      },
      {
        time: "5:30 PM – 6:45 PM",
        title: "Debate with Orators",
        venue: "AC02-013"
      }
    ]
  },
  {
    date: "08-02-2026",
    events: [
      {
        time: "9:00 AM",
        title: "Registration",
        venue: ""
      },
      {
        time: "10:00 AM",
        title: "Talk 2",
        venue: "AC02-007"
      },
      {
        time: "10:00 AM",
        title: "Drug Discovery",
        venue: "AC02-013"
      },
      {
        time: "11:00 AM – 1:30 PM",
        title: "Nexopolis Case Competition",
        venue: "AC02-007"
      },
      {
        time: "1:30 PM",
        title: "Lunch Break",
        venue: ""
      },
      {
        time: "2:00 PM – 5:00 PM",
        title: "Orion's Lens: Astrophotography + Project Showcase",
        venue: "Book Statue Area"
      },
      {
        time: "2:00 PM – 5:00 PM",
        title: "Nexopolis Case Competition (Round 2)",
        venue: "AC02-007"
      },
      {
        time: "2:00 PM – 5:00 PM",
        title: "Workshop (Day 2)",
        venue: "AC02-008 & AC02-009"
      },
      {
        time: "5:45 PM",
        title: "Prize Distribution",
        venue: "AC02-007"
      },
      {
        time: "5:15 PM – 6:45 PM",
        title: "Rakesh Sharma???",
        venue: ""
      }
    ]
  }
];


export default function SchedulePage() {
  return (
    <div className="min-h-screen flex justify-center items-start pt-32">
      <Card title="Schedule">
        <div className="flex xl:flex-row flex-col xl:gap-4 gap-24 w-full justify-center items-start px-4 mt-10">
          {/*<Card title="Schedule">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-medium">Coming Soon</h2>
            </div>
          </Card>*/}

          {scheduleData.map((day) => (
            <div key={day.date} className="flex flex-col w-full justify-start items-center">
              <h1 className="text-3xl sm:text-6xl tan-harmoni-regular text-center bg-greenLight py-3 pt-6 w-[90%] rounded-md">{day.date}</h1>
              {day.events.map((e) => (
                <React.Fragment key={e.title+day.date+e.time}>
                <div className="w-[2px] h-3 bg-greenLight z-10"></div>
                <div className="bg-greenLight bg-opacity-20 p-4 rounded-lg w-[65%]">
                  <b className="text-xl">{e.title}</b>
                  <p className="text-sm">Time: {e.time}</p>
                  <p className="text-sm">Venue: {e.venue}</p>
                </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
