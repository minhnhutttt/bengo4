import Container from "@/components/layout/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import Sidebar from "./components/Sidebar";
import Title from "./components/Title";
import Faq from "./components/Faq";
import OfficeHours from "./components/OfficeHours";
import Form from "./components/Form";

export default function Contact() {
  const faqs = [
    { question: '投稿した内容を編集や削除することはできますか', href: '/faq/1' },
    { question: '投稿に追加で書き込みをしたいです', href: '/faq/2' },
  ]

  return (
    <main className="">
      <Breadcrumb items={[{ label: 'お問い合わせ' }]} />
      <div className="mb-12">
        <Container sidebar={<Sidebar />}>
          <Title variant={1} className="mb-[30px]">お問い合わせ</Title>
          <Faq faqs={faqs} />
          <OfficeHours />
          <Form />
        </Container>
      </div>
    </main>
  )
}
