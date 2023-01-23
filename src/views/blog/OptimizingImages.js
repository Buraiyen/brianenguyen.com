import Highlight from 'react-highlight';

import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { OptimizingPageTitle } from '../../helper/PageTitleData';

const WhyBlogView = () => {
  useEffect(() => {
    document.title = OptimizingPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css'
      />
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>
          Optmizing Images for Your Website
        </h1>
        <section className={classes['blog__text']}>
          <p className={classes['blog__date']}>2023</p>
          <p>
            Website images are one of the biggest culprits to slowing down your
            web pages. In this blog, I discuss why images can slow down websites
            and my ways to optimize my sites' images to improve load speeds
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Image Downloads</h2>
          <p>
            When you visit any page that has images, you, the client, send a
            request to the server to retrieve information about the site's page.
            This includes files such as HTML, CSS, JavaScript, images, etc.
            Think of this like you are downloading a video game or a movie
            online. The larger the content, the more time it takes to download
            it. This applies to websites too.
          </p>
          <p>
            Images are generally large files, and if they aren't optimized, they
            could take time to download, and thus slow down sites
          </p>
        </section>
        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Compressing Images and WebP Format
          </h2>
          <p>
            To optimize images, the first step that I do is compress using
            online file compressors. A website that I recommend is{' '}
            <a href='https://compressor.io' target='_blank' rel='noreferrer'>
              compressor.io
            </a>
            . It's a good idea to have a copy of the original, uncompressed file
            in case you need any other uses for it.
          </p>
          <p>
            After I compressed the file, I then convert the image to WebP with
            an online file converter like
            <a href='https://convertio.co/'>convertio.co</a>. The <em>WebP</em>{' '}
            format is 26% smaller in size compared to PNG images while
            maintaining the same quality.
          </p>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>Lazy Loading Images</h2>
          <p>
            When you visit a page, any images that should appear on the page
            will be downloaded from the server by default. This action is not a
            big deal on pages that don't much content, but this is an issue on
            pages that require scrolling, like this one.
          </p>
          <p>
            Why is this an issue? Say you load up into a large page with many
            contents. What if the moment you visit the page, you instead wanted
            visit another one?
            <em>
              Every single image that should appear on the page is already
              loaded, even if you didn't see it.{' '}
            </em>
            This is a waste of loading time from your end and a waste of server
            resources
          </p>
          <p>
            To prevent this issue, we want to only load images once our screen
            is in view of where the image should be. This is where the concept
            of <em>lazy loading</em> is used. Lazy loading using objects or
            components only when they are needed.
          </p>
          <p>
            To lazy load using the <code>{'<img />'}</code> HTML tag, you would
            use an attribute called <code>loading</code> and set its value to{' '}
            <code>lazy</code>
          </p>
          <div style={{ fontSize: '1.2rem' }}>
            <Highlight language='html'>
              {`<img src="example.webp" loading="lazy"/>`}
            </Highlight>
          </div>
        </section>

        <section className={classes['blog__text']}>
          <h2 className={classes['blog__header']}>
            Improving Load Times for Mobile Users
          </h2>
          <p>
            Everything that we've discussed so far can already be implemented to
            dratstically improve your load times, but there's still more we can
            do.
          </p>
          <p>
            Every image has a certain file size. Take for example an image that
            is 1000x600 with a file size of 60 KB. These properties will not
            change no matter what device the user has. This works fine for
            desktop users, but this might result in a slightly longer load time
            for mobile users. It's not really necessary to load a full sized
            image on mobile when we can scale it down while retaining the same
            quality.
          </p>
          <p>
            This is where dynamically rendering images come in. On this website,
            I have two versions of the same image:
          </p>
          <div style={{ fontSize: '1.2rem' }}>
            <Highlight language='html'>
              {`
<picture>
  <source srcSet={props.src} media="(min-width: 600px)" />
  <img
    src={props.srcMobile}
    lazy-src={props.srcMobile}
    alt=""
    className="jumbotron__image"
    decoding="async"
    rel="preload"
  />
</picture>
              `}
            </Highlight>
          </div>
          <p>
            The code above (which is specific to React but can be implemented
            using basic HTML) gets the current screen width. If the screen width
            is at least 600 pixels, then the regular image will be displayed.
            Else, the image will automatically be scaled down to 600 pixels
          </p>
          <p>
            You can look at this code in action on my website. Go to any main
            page on my website that has a jumbotron (aka the large image
            headers), view the <em>Network</em> tab, and change the size of the
            screen. You can see that if you are on a large screen size and you
            shrink the width down to less than 600 pixels, then a scaled-down
            version of that image gets downloaded from the server and rendered
            on the page. Same process works if you initially start on mobile
            view
          </p>
        </section>

        {/* TODO: Cloudinary */}
      </Container>
    </AnimatedPage>
  );
};

export default WhyBlogView;
