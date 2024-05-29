import Link from "next/link";
export default function AmazonButton(props: { url: string }) {
  return (
    <>
      <div className="mt-4">
        <Link href={props.url}>
          <a target="_blank" className="square_btn">
            <span>Amazonで購入</span>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .square_btn {
          position: relative;
          display: inline-block;
          width: 150px;
          border: 1px solid #9c7e31;
          border-top: 1px solid #a88734;
          border-bottom: 1px solid #846a29;
          border-radius: 3px;
          background: linear-gradient(to bottom, #f7dea1, #f0c24d);
          box-shadow: 0 1px 0 #faecc8 inset;
          text-align: center;
          color: #111;
          font-size: 0.8em;
          line-height: 1;
          padding: 0.7em;
        }

        .square_btn:hover {
          background: linear-gradient(to bottom, #f5d689, #eeba35);
        }
      `}</style>
    </>
  );
}
