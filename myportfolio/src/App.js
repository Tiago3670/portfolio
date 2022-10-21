import React from "react";

export default () => {
  const Skills = [
    {
      skillname: "Skill name 1",
      skilldescription: "Skill Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. 1",
      skillicon: "icon 1",
    },
    {
      skillname: "Skill name 2",
      skilldescription: "Skill Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. 2",
      skillicon: "icon 2",
    },
    {
      skillname: "Skill name 3",
      skilldescription: "Skill Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. 3",
      skillicon: "icon 3",
    },
    {
      skillname: "Skill name 4",
      skilldescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. description 4",
      skillicon: "icon 4",
    },
  ];

  return (
    <div class="relative flex min-h-screen justify-center  bg-gray-50 py-6 sm:py-12">
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">
            Transactions
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {Skills.map((Skills) => (
              <div key ={Skills.skillname} className="relative ">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    {Skills.skillicon}
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {Skills.skillname}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {Skills.skilldescription}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      </div>    
  </div>

  );
};
