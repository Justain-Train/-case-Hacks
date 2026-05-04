import Headshot from "../ui/Headshot"
import { TEAM_MEMBERS } from "../../data/team"

export default function MeetTheTeam() {
  return (
    <section className="mt-section flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-center text-[#3f2f27]">
          Meet the Team
        </h2>
      </div>

      <div className="team-carousel w-full">
        <div className="team-marquee">
          {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, index) => (
            <div key={`${member.id}-${index}`} className="team-card flex flex-col items-center gap-4">
              <Headshot
                headshotSrc={member.headshot}
                headshotAlt={member.alt}
              />
              <div className="text-center">
                <p className="text-lg font-semibold text-[#52443c]">
                  {member.name}
                </p>
                <p className="text-sm text-[#5e4f44]">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}