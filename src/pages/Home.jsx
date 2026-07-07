import WorkspaceCard from "../components/WorkspaceCard";
import { workspaces } from "../data/workspaces";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="eyebrow">Foundry</p>
        <h1>Where creative projects begin.</h1>
        <p className="hero-text">
          A creative workspace for collecting inspiration, organizing ideas, and turning concepts into exceptional work.
        </p>
        <button className="primary-button">New Brief</button>
      </section>

      <section className="workspace-section">
        <div className="section-heading">
          <p>Continue Working</p>
          <h2>Recently opened projects.</h2>
        </div>

        <div className="workspace-grid">
          {workspaces.map((workspace) => (
            <WorkspaceCard
            key={workspace.id}
            title={workspace.title}
            category={workspace.category}
            status={workspace.status}
            accent={workspace.accent}
            icon={workspace.icon}
          />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;