const Book = (props) => {
  const { Img, Author, Title, number } = props;
  //
  return (
    <article className="Book">
      <img src={Img} alt={Title} />
      <h2>{Title}</h2>
      <h4>{Author}</h4>
      <span className="Number">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
