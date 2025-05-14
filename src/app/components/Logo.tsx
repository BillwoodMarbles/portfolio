const Logo = () => {
  return (
    <svg
      width={200}
      height={200}
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 351.92 351.92"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{
              stopColor: "#E50914",
              stopOpacity: "var(--stop-opacity-start, 1)",
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "#E50914",
              stopOpacity: "var(--stop-opacity-end, 1)",
            }}
          />
        </linearGradient>
      </defs>
      <g id="Layer_1-2" data-name="Layer_1">
        <path
          className="cls-1"
          fill="url(#gradient1)"
          d="M175.96,14.08c89.26,0,161.88,72.62,161.88,161.88s-72.62,161.88-161.88,161.88S14.08,265.22,14.08,175.96,86.7,14.08,175.96,14.08M175.96,0C78.78,0,0,78.78,0,175.96s78.78,175.96,175.96,175.96,175.96-78.78,175.96-175.96S273.14,0,175.96,0h0Z"
        />
        <path
          className="cls-1"
          fill="url(#gradient1)"
          d="M267.5,113.87l-25.85,84.48-26.18-75.99-28.4,75.99-6.39-19.02c10.02-6.13,16.09-17.34,16.09-30.06,0-11.86-5.93-23.55-16.3-29.64-9.88-5.6-21.74-5.76-32.77-5.76h-18.81v58.97h-43.55v-58.97h-15.48v124.18h15.48v-52.94h43.55v52.94h15.52v-52.54h6.42c8.06,0,15.73-1.4,16.1-1.47l20.14,53.57,28.4-77.45,26.18,77.45,40.42-123.74h-14.57ZM149.34,172.67h-4.94v-44.96h4.12c15.32,0,33.76,2.8,33.76,22.23s-17.13,22.73-32.94,22.73Z"
        />
      </g>
    </svg>
  );
};
export default Logo;
