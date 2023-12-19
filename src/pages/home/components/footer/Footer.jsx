import React from "react"
import "./Footer.scss"
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="Firstly-footer">
                <div className="logo">
                    <img onClick={() => {
                        window.location.href = '/'
                    }} src="https://firebasestorage.googleapis.com/v0/b/hh3d-a3e75.appspot.com/o/img%2Fpngtree-movie-board-icon-image_1455346.jpg?alt=media&token=c93cf7cd-dd3c-4691-80b5-ef045577137b" />
                </div>

                <a> Phim hay</a>
                <p>- Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.</p>

            </div>

            <div className="footer-left">
                <h5 className="text-uppercase">Phim mới</h5>
                <ul className="list-unstyled">
                    <li><a href="">Phim hoạt hình</a></li>
                    <li><a href="">Phim kinh dị</a></li>
                    <li><a href="">Phim hài</a></li>
                </ul>
            </div>

            <div className="footer-mid">
                <h5 className="text-uppercase">Phim hay</h5>
                <ul className="list-unstyled">
                    <li><a href="">Phim Việt Nam</a></li>
                    <li><a href="">Phim Trung Quốc</a></li>
                    <li><a href="">Phim Nhật Bản</a></li>

                </ul>
            </div>

            <div className="footer-right">
                <h5 className="text-uppercase">Thông tin</h5>
                <ul className="list-unstyled">
                    <li><a href="">Giới thiệu</a></li>
                    <li><a href="">Liên hệ chúng tôi</a></li>
                    <li><a href="">Điều khoản sử dụng</a></li>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© Phim Hay
    </div>

</footer>

export default Footer
