import Link from "next/link";
export default function LinkButton(props: {
  url: string;
  message: string;
  colorCode: string;
}) {
  return (
    <>
      <div>
        <Link href={props.url}>
          <a className="btn">
            <span>{props.message}</span>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .btn {
          display: block;
          text-align: center;
          vertical-align: middle;
          text-decoration: none;
          width: 250px;
          margin: auto;
          padding: 15px;
          font-weight: bold;
          border: 2px solid ${props.colorCode};
          color: ${props.colorCode};
          transition: 0.3s;
        }
        .btn:hover {
          color: #fff;
          background: ${props.colorCode};
        }
        @media only screen and (max-width: 600px) {
          .btn {
            width: 200px;
            padding: 10px;
            font-size: 14px;
            border: 2px solid ${props.colorCode};
          }
        }
      `}</style>
    </>
  );
}
