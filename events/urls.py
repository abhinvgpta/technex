from django.conf.urls.defaults import *
import events.views
urlpatterns=patterns('events.views',
    (r'^(\w+)$','event'),
    #(r'^create/','blog_create'),
     )