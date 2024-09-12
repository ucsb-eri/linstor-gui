%define debug_package %{nil}

Name:		linstor-gui
Version:	1.0.0
Release:	1
Summary:	GUI for LINSTOR
%global	tarball_version %(echo "%{version}" | sed -e 's/~rc/-rc/' -e 's/~alpha/-alpha/')

License:	LINBIT-Proprietary
Source0:	%{name}-%{tarball_version}.tar.gz

Requires:	linstor-controller >= 1.13.1
BuildArch:	noarch

%description
Administration GUI for LINSTOR clusters.

%prep
%setup -q -n %{name}-%{tarball_version}


%build
echo "Nothing to build"


%install
make install DESTDIR=%{buildroot}


%files
/usr/share/linstor-server/ui


%changelog
* Mon Feb 28 2022 Rene Peinthor <rene.peinthor@linbit.com> 1.0.0-1
-  New upstream release

* Thu Jan 20 2022 Roland Kammerer <roland.kammerer@linbit.com> 1.0.0~rc.4-1
-  New upstream release

* Thu Dec 16 2021 Roland Kammerer <roland.kammerer@linbit.com> 1.0.0~rc.3-1
-  New upstream release

* Wed Nov 17 2021 Roland Kammerer <roland.kammerer@linbit.com> 1.0.0~rc.2-1
-  New upstream release

* Mon Nov 15 2021 Roland Kammerer <roland.kammerer@linbit.com> 1.0.0~rc.1-1
-  New upstream release
