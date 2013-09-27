from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()
import technex.views

urlpatterns = patterns('technex.views',
    # Examples:
    # url(r'^$', 'technex.views.home', name='home'),
   # url(r'^technex/', include('technex.foo.urls')),
url(r'^events/', include('events.urls')),
url(r'^$', 'mainpage'),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
     url(r'^admin/', include(admin.site.urls)),
)
