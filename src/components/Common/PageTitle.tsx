import './pageTitle.scss';

const PageTitle = (props: { title: string; }) => {
  const { title } = props;

  return (
    <h2 className="title page-title">
      {title}
    </h2>
  )
}

export default PageTitle;