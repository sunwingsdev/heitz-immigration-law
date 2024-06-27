const ServiceTypeCard = ({ service }) => {
  const { title, icon: Icon, details } = service;
  return (
    <div>
      <Icon />
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  );
};

export default ServiceTypeCard;
