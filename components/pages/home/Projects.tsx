import { useAppDispatch, useAppSelector } from '@app/hooks/redux';
import { fetchPinnedRepositories } from '@app/store/thunks/home.thunk';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects: FC = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector((state) => state.home.pinnedRepositories);

  useEffect(() => {
    dispatch(fetchPinnedRepositories());
  }, [dispatch]);

  return (
    <section className="container mx-auto">
      <h1 className="text-2xl font-bold mb-8">Projects</h1>
      <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {!projects.loading
          ? projects.data.map((repository, i) => (
              <Link key={i} href="/" passHref>
                <a>
                  <ProjectCard
                    repository={repository}
                    className="animate-fadeIn"
                  />
                </a>
              </Link>
            ))
          : Array.from({ length: 6 }).map((_, i) => (
              <ProjectCard key={i} className="animate-fadeIn" />
            ))}
      </div>
    </section>
  );
};

export default Projects;
