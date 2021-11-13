import { PinnedRepository } from '@models/PinnedRepository';
import { FC } from 'react';
import { GitPullRequest, Star } from 'react-feather';
import styles from './ProjectCard.module.css';
import Skeleton from 'react-loading-skeleton';

interface Props {
  repository?: PinnedRepository;
  className?: string;
}

const ProjectCard: FC<Props> = ({ repository, className }) => {
  return (
    <div
      className={`w-full p-4 py-6 rounded ${className} ${styles.projectCard}`}
    >
      <h2 className="font-medium mb-4">
        {repository ? (
          `${repository.owner} / ${repository.name}`
        ) : (
          <Skeleton width="50%" />
        )}
      </h2>
      <p
        className="line-clamp-3 h-16 text-gray-500 leading-snug mb-6"
        style={{ fontSize: '0.95rem' }}
      >
        {repository ? (
          repository.description
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </p>
      <div className="w-full flex justify-between text-gray-500">
        {repository ? (
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <Star size={16} className="mr-2" />
              <span className="text-sm">{repository.stars}</span>
            </div>
            <div className="flex items-center">
              <GitPullRequest size={16} className="mr-2" />
              <span className="text-sm">{repository.forks}</span>
            </div>
          </div>
        ) : (
          <Skeleton width="7rem" />
        )}
        <div className="text-sm">
          {repository ? repository.language : <Skeleton width="6rem" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
