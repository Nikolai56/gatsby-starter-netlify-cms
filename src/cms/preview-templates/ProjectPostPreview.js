import React from 'react'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry, widgetFor }) => {
    const entryAuthors = entry.getIn(['data', 'authors']);
    const authors = entryAuthors ? entryAuthors.toJS() : [];
    return (
        <ProjectPostTemplate
            content={widgetFor('body')}
            description={entry.getIn(['data', 'description'])}
            tag={entry.getIn(['tag', 'tag'])}
            title={entry.getIn(['data', 'title'])}
            image={entry.getIn(['data', 'image'])}
            authors={authors}
        />
    )
};

export default ProjectPostPreview
