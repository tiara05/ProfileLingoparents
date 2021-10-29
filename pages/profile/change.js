import Link from 'next/link'
import Image from 'next/image'
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import Linked from '../../components/Isi/Linked';
import SidebarMenu from '../../components/Isi/SidebarMenu';
import ChangePassword from '../../components/Isi/ChangePassword';


const Change = ({ Children }) => {
  return (
    <div class="max-w-6xl mx-auto px-4">
    <Layout>
        <div className="md:mt-2">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
                          <SidebarMenu/>
                        </div>
                        <div className="xl:col-start-3 xl:col-end-6 px-4 mb-14">
                          <ChangePassword/>
                        </div>
                    </div>
                </div>
          </div>
    </Layout>
    </div>
  );
}
 
export default Change;