import Link from 'next/link';

export default () => <div>
    <Link href="/css"><a>With css import</a></Link>
    <br />
    <Link href="/nocss"><a>Without css import</a></Link>
</div>;
