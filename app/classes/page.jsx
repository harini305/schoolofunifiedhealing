import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScheduleTabs from "@/components/ScheduleTabs";

export const metadata = {
  title: "Community Classes",
  description: "Over 30 free community classes every week in Ubud, Bali — yoga, breathwork, sound healing, dance, meditation and more. Free after a one-time enrollment.",
};

export default function ClassesPage() {
  return (
    <>
      <PageHero
        title="Community classes"
        intro="Over 30 classes every week, taught by 30 volunteer teachers. Every class is free once you are enrolled — try as many as you like."
      />

      <section className="section">
        <div className="container">
          <ScheduleTabs />
        </div>
      </section>

      <section className="section cream fit-footer">
        <div className="container fit-body classes-closing">
          <div>
            <h2>New to the school?</h2>
            <p style={{ maxWidth: "52ch" }}>
              Try a complimentary Day Pass before you enroll. Please arrive at least 30 minutes
              before your first class to complete enrollment, and remember sign-in starts 15 minutes
              before class — there is strictly no entrance 10 minutes after the class has started.
            </p>
            <div className="btn-row">
              <Link className="btn btn-gold" href="/enrollment" prefetch={false}>Enrollment options</Link>
            </div>
          </div>
          <div className="frame frame-arch img-hover classes-closing-photo">
            <img src="/images/sound-bowls-class.webp" alt="A sound healing class with singing bowls at the school" width="1482" height="988" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
