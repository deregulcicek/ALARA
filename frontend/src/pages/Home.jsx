import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../lib/api";
import { formatDate, truncateText } from "../lib/utils";

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts({ page_size: 3 });
        setFeaturedPosts(res.data?.results || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Ana Sayfa | Psikolog</title>
        <meta
          name="description"
          content="Bireysel terapi, aile terapisi ve danışmanlık hizmetleri."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ruh Sağlığınızı
            <span className="block text-primary-200">Destekliyoruz</span>
          </h1>

          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-10">
            Profesyonel psikolog desteği ile yaşam kalitenizi artırın.
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-primary-700">
              Randevu Al
            </Link>
            <Link
              to="/about"
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-700 transition"
            >
              Hakkımda
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Hizmetlerimiz
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Bireysel Terapi", "Kişisel gelişim için birebir terapi."],
              ["Aile Terapisi", "Aile içi iletişimi güçlendirin."],
              ["Danışmanlık", "Hayatın zorluklarında rehberlik."],
            ].map(([title, desc], i) => (
              <div key={i} className="card text-center">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Son Blog Yazıları
          </h2>

          {loading ? (
            <div className="text-center text-gray-500">Yükleniyor…</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="card">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary-600"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(post.published_at)}
                  </p>
                  <p className="text-gray-600">
                    {truncateText(post.excerpt, 120)}
                  </p>
                </article>
              ))}
            </div>
          )}

          <div className="text-center mt-14">
            <Link to="/blog" className="btn-primary">
              Tüm Yazılar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
