import { Suspense } from "react";
import Loading from "./dashboard/loading";
import Album from './dashboard/Albums'
export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html>
        <body>
            <main>{children}</main>

            <article>
            <Suspense fallback={<Loading></Loading>}>
                <Album artistId={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}/>
            </Suspense>
                
            </article>
            </body>
      </html>
    );
  }