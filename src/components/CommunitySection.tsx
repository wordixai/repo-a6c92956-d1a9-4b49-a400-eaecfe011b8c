const CommunitySection = () => {
  const tweets = [
    {
      id: 1,
      author: "ビケイビケイ",
      handle: "@rlaalsrb69",
      avatar: "https://pbs.twimg.com/profile_images/725722410721243136/coKL7uh1_normal.jpg",
      content: "wow technologya! #nanobanana,#ai",
      images: [
        "https://pbs.twimg.com/media/GybI6EVasAA2v4W.jpg",
        "https://pbs.twimg.com/media/GybI6ELaMAAH3b1.jpg",
        "https://pbs.twimg.com/media/GybI6ESbcAAq9qj.jpg",
        "https://pbs.twimg.com/media/GybI6F_aYAETsSt.jpg"
      ]
    },
    {
      id: 2,
      author: "ちょうどいいAIクリエイター",
      handle: "@oden_ai_ai",
      avatar: "https://pbs.twimg.com/profile_images/1656314064266756096/AWDkV-N-_normal.jpg",
      content: "nanobanana🍌",
      images: [
        "https://pbs.twimg.com/media/GyrrhWTacAABhy-.jpg",
        "https://pbs.twimg.com/media/GyrriaGacAA5WxY.jpg"
      ],
      verified: true
    },
    {
      id: 3,
      author: "너구르르",
      handle: "@logstn",
      avatar: "https://pbs.twimg.com/profile_images/1524320069/image_normal.jpg",
      content: "이야... 감탄만 나옵니다.\n제가 포인트 도색한 부분이 살아 있어서 너무 좋습니다.\n#nanobanana",
      images: [
        "https://pbs.twimg.com/media/GybwidjasAEnhqe.jpg",
        "https://pbs.twimg.com/media/GybwiaUaQAAl0CS.jpg"
      ],
      verified: true
    }
  ];

  return (
    <section id="effect-display" className="sm:pb-32 py-20 md:py-40">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Nano Banana社区创作
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            看看其他人用Nano Banana创作了什么
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tweets.map((tweet) => (
            <div
              key={tweet.id}
              className="relative flex size-full max-w-lg flex-col gap-2 overflow-hidden rounded-lg border border-gray-800 p-4 backdrop-blur-md bg-gray-900/50"
            >
              {/* Tweet Header */}
              <div className="flex flex-row justify-between tracking-tight">
                <div className="flex items-center space-x-2">
                  <a href="#" target="_blank" rel="noreferrer">
                    <img
                      alt={tweet.author}
                      height={48}
                      width={48}
                      className="overflow-hidden rounded-full border border-transparent"
                      src={tweet.avatar}
                    />
                  </a>
                  <div>
                    <a href="#" target="_blank" rel="noreferrer" className="flex items-center whitespace-nowrap font-semibold text-white">
                      {tweet.author}
                      {tweet.verified && (
                        <svg
                          aria-label="Verified Account"
                          viewBox="0 0 24 24"
                          className="ml-1 inline size-4 text-blue-500"
                        >
                          <g fill="currentColor">
                            <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                          </g>
                        </svg>
                      )}
                    </a>
                    <div className="flex items-center space-x-1">
                      <a href="#" target="_blank" rel="noreferrer" className="text-sm text-gray-500 transition-all duration-75">
                        {tweet.handle}
                      </a>
                    </div>
                  </div>
                </div>
                <a href="#" target="_blank" rel="noreferrer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    className="size-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                    </g>
                  </svg>
                </a>
              </div>

              {/* Tweet Content */}
              <div className="break-words leading-normal tracking-tighter">
                <span className="text-sm font-normal text-white whitespace-pre-line">
                  {tweet.content}
                </span>
              </div>

              {/* Tweet Images */}
              <div className="flex flex-1 items-center justify-center">
                <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
                  <div className="shrink-0 snap-center sm:w-2" />
                  {tweet.images.map((image, index) => (
                    <img
                      key={index}
                      alt={`Photo ${index + 1}`}
                      className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm"
                      src={image}
                    />
                  ))}
                  <div className="shrink-0 snap-center sm:w-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;