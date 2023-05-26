import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  const pdfDownload = () => {};

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-bold">Blogs:</h1>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              className="underline bg-red-600 text-white font-semibold text-lg p-2 rounded-3xl "
              onClick={toPdf}
            >
              <span className=" text-gray-900 underline">Generate-</span>PDF
            </button>
          )}
        </Pdf>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-semibold">
          Differences between uncontrolled and controlled components.
        </h1>
        <p className="font-semibold m-4">
          Controlled components in React are ones where the state of the
          component manages the input value, while uncontrolled components are
          ones where the input value is managed by the DOM itself. Controlled
          components provide a more reliable and predictable way of handling
          form inputs, but can be more verbose to set up, while uncontrolled
          components can be simpler to set up but may be less reliable in
          certain situations.
        </p>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-semibold">
          How to validate React props using PropTypes?
        </h1>
        <p className="font-semibold m-4">
          To validate React props using PropTypes, you need to import the
          PropTypes library from the 'prop-types' package and define the
          expected prop types for a given component.
        </p>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-semibold">
          The difference between nodejs and express js.
        </h1>
        <p className="font-semibold m-4">
          Node.js is a server-side runtime environment for executing JavaScript
          code outside of a web browser, while Express.js is a framework for
          building web applications on top of Node.js.
        </p>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-semibold">
          What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="font-semibold m-4">
          A custom hook is a reusable function in React that contains stateful
          logic and can be shared between components. A custom hook can be
          created to handle any type of stateful logic that needs to be reused
          across multiple components, such as fetching data from an API or
          handling user input.
        </p>
      </div>
      {/* <div ref={ref} className="my-10">
        <h1 className="text-2xl font-semibold">
          Some information about the blog page
        </h1>
        <p className="font-semibold m-4">
          In this pdf we have all the question of Blog section <br /> <br />{" "}
          1.Tell us the differences between uncontrolled and controlled
          components. <br />
          2. How to validate React props using PropTypes. <br />
          3. Tell us the difference between nodejs and express js. <br />
          4. What is a custom hook, and why will you create a custom hook?
        </p>
      </div> */}
    </div>
  );
};

export default Blog;
