import { profile as initialProfile } from "../data/profile";
import { usePersistentState } from "../hooks/usePersistentState";
import ProfileHeader from "../components/profile/ProfileHeader";
import StatsRow from "../components/profile/StatsRow";
import Summary from "../components/profile/Summary";
import Skills from "../components/profile/Skills";
import Experience from "../components/profile/Experience";
import Education from "../components/profile/Education";
import Projects from "../components/profile/Projects";
import Completeness from "../components/profile/Completeness";
import DataQuality from "../components/profile/DataQuality";
import Sources from "../components/profile/Sources";
import RecentActivity from "../components/profile/RecentActivity";

export default function ProfilePage() {
  // The page owns the data. Sections never change it directly, they call onSave.
  const [profile, setProfile] = usePersistentState("profile", initialProfile);
  // The header can't be edited on this page, so it always comes straight from the source
  // (today the data file, later the backend) and is never read from the saved copy.
  const { header } = initialProfile;
  const { stats, summary, skills, experience, education, projects } = profile;
  const { completeness, quality, sources, activity } = profile;

  // update("skills") returns a save function that replaces just the `skills` part of the data
  const update = (key) => (value) => setProfile((prev) => ({ ...prev, [key]: value }));

  // Derived, not stored: the Skills count always follows the skills list.
  const liveStats = stats.map((s) => (s.label === "Skills" ? { ...s, value: skills.length } : s));

  return (
    <main className="page">
      <ProfileHeader {...header} />
      <StatsRow stats={liveStats} />
      <div className="layout">
        <div className="layout__col">
          <Summary text={summary} onSave={update("summary")} />
          <Skills skills={skills} onSave={update("skills")} />
          <Experience items={experience} onSave={update("experience")} />
          <Education items={education} onSave={update("education")} />
          <Projects items={projects} onSave={update("projects")} />
        </div>
        <aside className="layout__col">
          <Completeness percent={completeness} />
          <DataQuality items={quality} />
          <Sources items={sources} />
          <RecentActivity items={activity} />
        </aside>
      </div>
    </main>
  );
}
