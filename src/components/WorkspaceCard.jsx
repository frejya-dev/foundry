function WorkspaceCard({ title, category, status, accent, icon }) {
  return (
    <article className="workspace-card" style={{ "--card-accent": accent }}>
      <div className="workspace-card__top">
        <div className="workspace-card__icon">{icon}</div>
        <button className="workspace-card__menu" aria-label={`More options for ${title}`}>
          •••
        </button>
      </div>

      <div className="workspace-card__content">
        <p className="workspace-card__category">{category}</p>
        <h2>{title}</h2>
      </div>

      <div className="workspace-card__footer">
        <span></span>
        <p>{status}</p>
      </div>
    </article>
  );
}

export default WorkspaceCard;