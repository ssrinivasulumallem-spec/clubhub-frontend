function Card({ title, description, children }) {

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-4">

      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h2>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {children}

    </div>
  );

}

export default Card;