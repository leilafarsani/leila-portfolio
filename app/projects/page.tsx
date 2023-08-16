import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Project1",
    category: "Solo",
    liveDemoLink: "",
    githubLink: "",
    techStack: [""],
  },
  {
    title: "Project 2",
    category: "Team",
    liveDemoLink: "",
    githubLink: "",
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
    <div className="bg-gray-100 text-gray-800 min-h-screen py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-800 text-center">
        My Projects
      </h1>
      <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl md:text-5xl font-bold mb-8 text-gray-800">
            Solo
          </h2>
          {soloProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 text-white transform transition-transform hover:scale-105 mb-3"
            >
              <CardContent>
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
                >
                  Live Demo
                </Button>
                <Button
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>

        <div>
          <h2 className="text-2xl md:text-5xl font-bold mb-8 text-gray-800">
            Team
          </h2>
          {teamProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 text-white transform transition-transform hover:scale-105 mb-3"
            >
              <CardContent>
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
                >
                  Live Demo
                </Button>
                <Button
                  size="small"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
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
