// this is a component containing the pop up box for the about me section. It is to be called by the specific physics box that uses it.

import { useEffect, useState } from "react";

interface Props {
  isClosed: boolean;
  setIsOpen: (arg0: boolean) => void;
  setIsClosed: (arg0: boolean) => void;
  isOpen: boolean;
  Mount: boolean;
  button1: boolean;
  button1set: (arg0: boolean) => void;
  button2: boolean;
  button2set: (arg0: boolean) => void;
  button3: boolean;
  button3set: (arg0: boolean) => void;
  button4: boolean;
  button4set: (arg0: boolean) => void;
  button5: boolean;
  button5set: (arg0: boolean) => void;
  button6: boolean;
  button6set: (arg0: boolean) => void;
}

const PopUpProject = ({
  isClosed,
  setIsClosed,
  setIsOpen,
  isOpen,
  button1,
  button1set,
  button2,
  button2set,
  button3,
  button3set,
  button4,
  button4set,
  button5,
  button5set,
  button6,
  button6set,
}: Props) => {
  const [Mount1, setMount] = useState(false);

  useEffect(() => {
    if (Mount1) {
      if (isClosed) {
        const element = document.getElementById("project");
        element?.classList.remove("opacity-0");
        element?.classList.add("exit");
      } else {
        const element = document.getElementById("project");
        element?.classList.remove("opacity-0");
      }
    } else {
      setMount(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosed]);

  interface Project {
    name: string;
    button: boolean;
    buttonset: (arg0: boolean) => void;
    link: string;
    image: string;
    techlist: string[];
    winner: boolean;
    winnerlink: string;
    WIP: boolean;
    description: string;
  }

  const ProjectList: Project[] = [
    {
      name: "SpellPrimer",
      button: button6,
      buttonset: button6set,
      link: "https://github.com/cala28124-sketch/spellbook",
      image: "/spellbook.png",
      techlist: ["/reactlogo.png", "/Tauri.png", "/MongoDB.png"],
      winner: false,
      winnerlink: "",
      WIP: false,
      description:
        "A digital DnD spellbook made to be able to store, catalogue, and quickly add spells for TTRPG games! Built using React/Tauri, along with MongoDB for a DB, this was created due to the concept being extremely useful for a campaign I currently play in.",
    },
    {
      name: "ElderWatch",
      button: button5,
      buttonset: button5set,
      link: "https://github.com/Humbertxx/hack_usf",
      image: "/Elder.jpg",
      techlist: [
        "/reactlogo.png",
        "/yolo.png",
        "/snowflake.png",
        "/fastapi.png",
      ],
      winner: true,
      winnerlink: "https://devpost.com/software/elderwatch",
      WIP: false,
      description:
        "Built at HackUSF 2026, ElderWatch was built with the motivation of being able to more easily monitor and keep in touches with one’s Elders. It uses Computer Vision and Snowflake to get data from live images, and give live updates to a website dashboard.",
    },
    {
      name: "Flaming Notes",
      button: button4,
      buttonset: button4set,
      link: "https://github.com/cala28124-sketch/Flaming-Notes",
      image: "/flamingnotes.jpg",
      techlist: ["/reactlogo.png", "/MongoDB.png", "/Go.png", "/googleadk.png"],
      winner: false,
      winnerlink: "",
      WIP: false,
      description:
        "Built at SwampHacks 2025, Flaming Notes was built to allow students an accesible way to freely share notes related to a specific class. It uses uploaded student notes to generate a compliation of them using gemini in the back end, allowing public access.",
    },
    {
      name: "Personal Portfolio",
      button: button3,
      buttonset: button3set,
      link: "https://github.com/cala28124-sketch/portfolio-project",
      image: "/personalport.png",
      techlist: ["/tailwind.png", "/reactlogo.png", "/typescript.png"],
      winner: false,
      winnerlink: "",
      WIP: false,
      description:
        "My personal portfolio website, built to showcase my skills, projects, and experience. Built using React and Tailwind CSS, this website is designed to be responsive and user-friendly, providing visitors with an an easy way to learn more about me.",
    },
    {
      name: "PNGpal",
      button: button2,
      buttonset: button2set,
      link: "https://github.com/cala28124-sketch/pngPalme",
      image: "/pngpalimage.png",
      techlist: ["/python.png", "/reactlogo.png", "/elevenlabs.png"],
      winner: false,
      winnerlink: "",
      WIP: false,
      description:
        "A chatbot that overlays itself on the users screen, allowing them to freely ask financial advice, giving back a response when doing so, and recording the transcript of the conversation for the user to read. This was a project made by me and three others at KnightHacks 2025.",
    },
    {
      name: "TruthMeter",
      button: button1,
      buttonset: button1set,
      link: "https://github.com/JustinTeape/factCheck",
      image: "/truthmeter.png",
      techlist: [
        "/reactlogo.png",
        "/fastapi.png",
        "/python.png",
        "/googleadk.png",
      ],
      winner: false,
      winnerlink: "",
      WIP: false,
      description:
        "An accesible browser extension that allows one to check the credibility, and accuracy of a webpage, providing a summary of the page and what it contains, and how credible/accurate each point is. This project was made by me and three others at Shellhacks 2025.",
    },
  ];

  return (
    <>
      <button
        className={`overlay transition-opacity duration-800 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          if (isClosed) {
            setIsOpen(true);
            setIsClosed(false);
          } else {
            setIsOpen(false);
            setIsClosed(true);
          }
        }}
      ></button>

      <div className="flex justify-center">
        <div
          id="project"
          className={`my-[5%] custom-scrollbar font opacity-0 absolute flex flex-col max-h-[90%] w-[95%] md:h-4/5 md:w-5/6 lg:max-w-4/5 items-center rounded-md border-10 border-green-800 bg-green-300 z-50 overflow-y-auto 
    ${isOpen ? "start pointer-events-auto" : "pointer-events-none"}`}
        >
          <button
            className="absolute top-2 right-2"
            onClick={() => {
              if (isClosed) {
                setIsOpen(true);
                setIsClosed(false);
              } else {
                setIsOpen(false);
                setIsClosed(true);
              }
            }}
          >
            <img
              className="h-[30px]"
              src="\closebutton6.png"
              alt="close button"
            />
          </button>
          <p className="font-bold text-green-800 text-5xl p-2 mt-5">
            My Projects
          </p>
          <p className="font-bold text-green-800 text-md p-2">
            I always want to put my skills to the test- and here are the cases
            where I've done exactly that! Click the image to add them to the
            page.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-fit h-fit p-2">
            {ProjectList.map((item) => (
              <div className="min-h-4/5 w-fit border-green-800 border-5 bg-green-400 flex flex-col items-center">
                <p className="font-bold text-green-800 text-xl py-2">
                  {item.name}
                </p>

                <div
                  className={`transition-opacity duration-800
                
                ${item.button ? "opacity-0" : "opacity-100"}

                `}
                >
                  <button
                    onClick={() => {
                      item.buttonset(true);
                    }}
                  >
                    <img
                      className="h-[150px] border-5 border-green-800 block enlargen2"
                      src={item.image}
                      alt={item.name}
                    ></img>
                  </button>
                </div>
                <a
                  className="!no-underline"
                  href={item.winnerlink}
                  target="_blank"
                >
                  <div
                    className={`${item.winner ? "my-2 bg-green-300 rounded-md w-[200px] h-[50px] flex justify-center items-center border-5 border-green-800 text-green-800 hover:text-yellow-100 hover:bg-yellow-500 hover:border-yellow-800 transition-colors duration-300" : "hidden"}`}
                  >
                    <p className="font font-bold text-base my-2">
                      Hackathon Winner!
                    </p>
                  </div>
                </a>
                <div
                  className={`${item.WIP ? "my-2 bg-green-300 rounded-md w-[200px] h-[50px] flex justify-center items-center border-5 border-green-800 text-green-800 hover:text-black hover:bg-yellow-300 hover:border-black transition-colors duration-300" : "hidden"}`}
                >
                  <p className="font font-bold text-base my-2">
                    Work in Progress
                  </p>
                </div>
                <div
                  className={`${!item.WIP && !item.winner ? "my-2 bg-green-300 rounded-md w-[200px] h-[50px] flex justify-center items-center border-5 border-green-800 text-green-800 hover:text-green-800 hover:bg-green-500 hover:borde-green-300 transition-colors duration-300" : "hidden"}`}
                >
                  <p className="font font-bold text-base my-2">Completed!</p>
                </div>

                <div className="mx-auto border-4 border-transparent">
                  <p className="text-center text-sm text-green-800 font-bold">
                    {item.description}
                  </p>
                </div>

                <div className="flex justify-center rounded-md border-5 border-green-800 bg-green-300">
                  {item.techlist.map((item, index) => (
                    <img
                      className="h-[50px] enlargen2 p-2"
                      src={item}
                      alt={index.toString()}
                    />
                  ))}
                </div>

                <a className="!no-underline" href={item.link} target="_blank">
                  <div className="my-2 bg-green-300 rounded-md w-[200px] h-[50px] flex justify-center items-center border-5 border-green-800 hover:bg-green-500 transition-colors duration-300">
                    <img
                      src="hyperlink.png"
                      alt="hyperlink"
                      className="h-[40px] p-2 "
                    />
                    <p className="font font-bold text-green-800 text-base my-2">
                      View Project
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpProject;

/* 

<button
                onClick={() => {
                  button1set(true);
                }}
              >
                <img
                  className={`h-[150px] enlargen2
                
                ${button1 ? "opacity-0" : "opacity-100"}

                `}
                  src="\truthmeter.png"
                  alt="truth_meter"
                />
              </button>

              */
