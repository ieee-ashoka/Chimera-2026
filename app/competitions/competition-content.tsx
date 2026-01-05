import React from "react";

import { motion } from "framer-motion";

import Image from "next/image";

import { type Competition, type Round } from "./competitions";

const months: { [a: number]: string } = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
};

const RoundCard = (round: Round) => {
  const singleDate =
    round.startDate.getDate() === round.endDate.getDate() &&
    round.startDate.getMonth() === round.endDate.getMonth();

  return (
    <div className="flex flex-row justify-start items-center md:gap-8 flex-shrink-0">
      <div className="bg-gray-200 sm:rounded-md md:rounded-xl sm:w-3/6 md:w-1/6 min-h-48 flex flex-col text-slate-800 text-center sm:px-1 md:px-4 justify-center">
        <h1 className="sm:text-2xl md:text-3xl text-wrap">
          {singleDate
            ? round.startDate.getDate()
            : `${round.startDate.getDate()}-${round.endDate.getDate()}`}
        </h1>
        <p>{months[round.startDate.getMonth()]}</p>
      </div>
      <div className="md:w-full min-h-48 bg-gray-200 sm:rounded-md md:rounded-xl p-3">
        <h1 className="text-2xl mb-2 text-slate-900">{round.title}</h1>
        <p className="text-slate-600">{round.description}</p>
        {round.submissionInstructions && (
          <>
            <br />
            <p className="text-slate-600">
              <span className="font-bold">Submission</span>:{" "}
              {round.submissionInstructions}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const CompetitionContent = (competition: Competition) => {
  const teamSizeString =
    competition.teamSize !== undefined
      ? `${competition.teamSize[0]} - ${competition.teamSize[1]}`
      : "Unrestricted";
  const totalPool = competition.pool.reduce((s, v) => s + v.amount, 0);

  return (
    <div className="text-center mt-10 font-iceland">
      {/* Copied from About Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-iceland md:h-96">
        <div className="space-y-4 w-full md:w-3/6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-left">
            {competition.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl text-[#66e9fa] text-left">
            {competition.subtitle}
          </h2>

          <p className="text-xl text-left font-light font-iceland">
            {competition.pitchString}
          </p>

          <p className="text-2xl text-left font-bold font-iceland">
            Total Prize Pool: INR {totalPool}!
          </p>

          <div className="flex flex-col space-y-0 text-left">
            <a
              href={competition.regLink}
              className="text-xl bg-[#66e9fa] p-3 mb-2 text-slate-800 w-3/4 transition-transform hover:scale-110 rounded-lg"
              target="_blank"
            >
              Register Here!{" "}
              <span className="text-slate-600">
                Deadline: {competition.regDeadline.toDateString()}
              </span>
            </a>
            <span className="text-xl text-left text-slate-200">
              Team Size: {teamSizeString}
            </span>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.55 }}
          transition={{ duration: 0.4 }}
          className="sm:w-64 sm:h-64 md:h-full md:w-128 relative flex-shrink-0"
        >
          <Image
            src={competition.posterURL ?? competition.thumbnailURL}
            alt="competition poster"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Body */}
      <div className="space-y-8 font-iceland mt-12 text-base sm:text-lg lg:text-xl text-[#d3dbf0] leading-relaxed text-left mb-4">
        <h1 className="text-4xl text-white circularstd sm:text-5xl lg:text-5xl tracking-tight">
          Additional Details
        </h1>
        {competition.additionalDetails && (
          <p>{competition.additionalDetails}</p>
        )}
        {competition.rounds.length > 0 && (
          <>
            <h2 className="text-3xl mt-8 text-white circularstd sm:text-4xl lg:text-4xl tracking-tight">
              Rounds
            </h2>
            <div className="flex flex-col gap-8 justify-start align-center w-full">
              {competition.rounds.map((round, index) => (
                <RoundCard {...round} key={index} />
              ))}
            </div>
          </>
        )}
        {competition.judgingCriteria !== undefined && (
          <>
            <h2 className="text-3xl mt-8 text-white circularstd sm:text-4xl lg:text-4xl tracking-tight">
              Judging Criteria
            </h2>
            <ul className="list-disc ml-6">
              {competition.judgingCriteria.map((item, index) => {
                if (typeof item.description === "string") {
                  return (
                    <li key={index} className="text-xl list-item">
                      {item.title}: {item.description}
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="text-xl">
                      {item.title}:
                      <ul className="ml-6">
                        {item.description.map((subitem, subindex) => (
                          <li className="text-xl" key={subindex}>
                            {subitem}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
              })}
            </ul>
          </>
        )}
        <h2 className="text-3xl mt-8 text-white circularstd sm:text-4xl lg:text-4xl tracking-tight">
          Prizes
        </h2>
        <ul className="list-disc ml-6">
          {competition.pool.map((item, index) => (
            <li key={index} className="text-xl">
              {item.title}: INR {item.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompetitionContent;
