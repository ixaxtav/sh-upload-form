type ProgressBarProps = {
  text: string;
  percentage: number;
};

export const ProgressBar = ({ text, percentage }: ProgressBarProps) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-label-container">
        <span className="progress-text">{text}</span>
        <span className="progress-percentage">{percentage}MB</span>
      </div>
      <div className="progress-bar-background">
        <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
