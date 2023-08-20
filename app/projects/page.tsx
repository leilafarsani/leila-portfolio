import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Full-Stack Project Assessment",
    category: "Solo",
    liveDemoLink: "",
    githubLink: "https://github.com/leilafarsani/Full-Stack-Project-Assessment",
    techStack: [""],
  },
  {
    title: "Careless Whisper",
    category: "Team",
    liveDemoLink: "https://careless-whisper.vercel.app/",
    githubLink: "https://github.com/susanssky/careless-whisper",
    techStack: [""],
  },
  {
    title: "Project 3",
    category: "Solo",
    liveDemoLink: "",
    githubLink: "",
    techStack: [],
  },
  {
    title: "Project 4",
    category: "Team",
    liveDemoLink: "",
    githubLink: "",
    techStack: [""],
  },
  {
    title: "Project 5",
    category: "Solo",
    liveDemoLink: "",
    githubLink: "",
    techStack: [],
  },
  {
    title: "Project 6",
    category: "Team",
    liveDemoLink: "",
    githubLink: "",
    techStack: [],
  },
];
export default function ProjectPage() {
  const soloProjects = projects.filter(
    (project) => project.category === "Solo"
  );
  const teamProjects = projects.filter(
    (project) => project.category === "Team"
  );

  return (
    <div className="min-h-screen py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        My Projects
      </h1>
      <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-5xl font-bold mb-8">Solo</h2>
          {soloProjects.map((project, index) => (
            <Card
              key={index}
              className="transform transition-transform hover:scale-105 mb-3"
            >
              <CardContent className="bg-gray-200">
                <Typography variant="h6" component="div" className="mb-2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Technologies Used: {project.techStack.join(", ")}
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  size="small"
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FF6EB4", fontWeight: "600" }}
                >
                  Live Demo
                </Button>
                <Button
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FF6EB4", fontWeight: "600" }}
                >
                  GitHub Repo
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-2xl md:text-5xl font-bold mb-8">Team</h2>
          {teamProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 text-white transform transition-transform hover:scale-105 mb-3"
            >
              <CardContent className="bg-gray-200">
                <Typography variant="h6" component="div" className="mb-2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Technologies Used: {project.techStack.join(", ")}
                </Typography>
              </CardContent>
              <CardActions className="flex justify-center">
                <Button
                  size="small"
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FF6EB4", fontWeight: "600" }}
                >
                  Live Demo
                </Button>
                <Button
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#FF6EB4", fontWeight: "600" }}
                >
                  GitHub Repo
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
